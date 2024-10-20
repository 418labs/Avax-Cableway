import { 
  ECSClient, 
  RegisterTaskDefinitionCommand, 
  RunTaskCommand,
  RegisterTaskDefinitionCommandInput,
  RunTaskCommandInput
} from "@aws-sdk/client-ecs";

interface DockerRunConfig {
  configJson: string; // The content of your config.json file
}

export async function simulateDockerRunInFargate(config: DockerRunConfig) {
  const ecsClient = new ECSClient({ region: process.env.AWS_DEFAULT_REGION! });

  // First, register a new task definition
  const taskDefinitionInput: RegisterTaskDefinitionCommandInput = {
    family: "awm-relayer-task",
    containerDefinitions: [
      {
        name: "awm-relayer",
        image: "avaplatform/awm-relayer:latest",
        environment: [
          {
            name: "CONFIG_FILE",
            value: "/tmp/awm-relayer-config.json"
          },
          {
            name: "CONFIG_CONTENT",
            value: config.configJson
          }
        ],
        entryPoint: [
          "sh",
          "-c",
          "echo $CONFIG_CONTENT > $CONFIG_FILE && /usr/bin/awm-relayer"
        ],
        essential: true,
        logConfiguration: {
            logDriver: "awslogs",
            options: {
              "awslogs-group": "/ecs/awm-relayer",
              "awslogs-region": process.env.AWS_DEFAULT_REGION!,
              "awslogs-stream-prefix": "ecs"
            }
        }
      },
    ],
    requiresCompatibilities: ["FARGATE"],
    networkMode: "awsvpc",
    cpu: "256",
    memory: "512",
    executionRoleArn: process.env.ECS_EXECUTION_ROLE_ARN!,
  };

  const registerTaskDefCommand = new RegisterTaskDefinitionCommand(taskDefinitionInput);
  const taskDefinition = await ecsClient.send(registerTaskDefCommand);

  // Now, run the task
  const runTaskInput: RunTaskCommandInput = {
    cluster: process.env.ECS_CLUSTER_ARN!,
    taskDefinition: taskDefinition.taskDefinition!.taskDefinitionArn,
    launchType: "FARGATE",
    networkConfiguration: {
      awsvpcConfiguration: {
        subnets: [process.env.SUBNET_ID!],
        securityGroups: [process.env.SECURITY_GROUP_ID!],
        assignPublicIp: "ENABLED"
      }
    }
  };

  const runTaskCommand = new RunTaskCommand(runTaskInput);
  return await ecsClient.send(runTaskCommand);
}

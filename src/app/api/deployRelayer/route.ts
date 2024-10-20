import { NextRequest } from 'next/server'
import { simulateDockerRunInFargate, buildConfigJson } from '@/utils';
import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts'


export async function POST(request: NextRequest ) {
    try {
      const {
        sourceChainIds,
        destinationChainIds,
      } = await request.json();
      const accountPrivateKey = generatePrivateKey();
      const account = privateKeyToAccount(accountPrivateKey);
      const config = buildConfigJson({
        sourceChainIds,
        destinationChainIds,
        rewardAddress: account.address,
        accountPrivateKey,
      });
      const result = await simulateDockerRunInFargate({
        configJson: JSON.stringify(config),
      });
      return new Response(JSON.stringify({
        address: account.address,
        privateKey: accountPrivateKey,
        awsresult: result
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error starting task:', error);
      return new Response(JSON.stringify({ message: 'Error starting task', error }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
}

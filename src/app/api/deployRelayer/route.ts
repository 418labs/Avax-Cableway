import { NextRequest } from 'next/server'
import { simulateDockerRunInFargate } from '@/utils';

export async function POST(request: NextRequest ) {
    try {
      const { configJson } = await request.json();
      const result = await simulateDockerRunInFargate({
        configJson,
      });
      return new Response(JSON.stringify(result), {
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

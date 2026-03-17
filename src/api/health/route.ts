export async function GET(request: Request) {

    
  return new Response("I am fine !", {
    status: 200,
    headers: { 'Content-Type': 'application/plaintext' }
  });
}
 
export async function POST(request: Request) {
  // Parse the request body
  const body = await request.json();
 
 
  return new Response(JSON.stringify(body), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}
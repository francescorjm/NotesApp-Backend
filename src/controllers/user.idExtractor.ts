import jwt from 'jsonwebtoken';

// Interface for TypeScript
interface JwtPayLoad{
  id: string;
  email: string;
}

 
export function extractId(authorization: string | undefined){
  if (authorization) {
    // Extracts the JWT from the bearer
    const receivedJwt = authorization.split(" ")[1];
    // Decodes the encoded header
    const decodedToken = jwt.decode(receivedJwt) as JwtPayLoad;
    
    // Extracts the ID from the decoded token
    if(decodedToken.id){
      // console.log("Correct JWT returning existing userId")
      return decodedToken.id;
    
    }else{
      console.error('Invalid JWT');
      return undefined;
    }
    
  }
  else {
    console.log("SOMEHOW authorization header is undefined");
    return undefined;
  }
}
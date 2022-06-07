// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import jwtDecode from 'jwt-decode';
// import { request } from 'http';

// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {
// if(token !== null && token !== ''){
//   const decodedToken: { userId: string, iat: number, exp: number} = jwtDecode(token);
//       const expirationDate = new Date(decodedToken.exp * 1000);
//       const currentDate = new Date();
//       if(expirationDate < currentDate) {
//         localStorage.removeItem('token');
//         return next.handle(request);
// }
//  const authReq = request.clone(
//         {
// }

// import React, { useEffect } from 'react';
// import { useUseGetOneCar } from './resource';
//
// const Test = ({
//   resource,
//   resOneCar,
//   id,
//   ee,
// }: {
//   resource: () => void;
//   resOneCar: (x: number) => void;
//   id: number;
//   ee: string;
// }) => {
//   // <Suspense fallback={<h1 style={{ color: 'maroon' }}>ee</h1>}>
//   //   <h1 style={{ color: 'maroon' }}>oo</h1>
//   //@ts-ignore
//   const posts = resource.posts.read();
//   // const carReq = useUseGetOneCar(id);
//   // const carReq = resOneCar(id);
//
//   // console.log(resOneCar);
//   //@ts-ignore
//   const car = resOneCar.oneCar.read();
//   useEffect(() => {
//     // console.log(car);
//     console.log('testmount');
//   }, []);
//   return (
//     <div>
//       {/*<h1 style={{ color: 'whitesmoke' }}>{x[0]?.id}</h1>*/}
//       <h1 style={{ color: 'greenyellow' }}>{car.brand}</h1>
//       <h3 style={{ color: 'whitesmoke' }}>Posts</h3>
//       <ul>
//         {posts.map((post: any, i: number) => (
//           <h1 style={{ color: 'whitesmoke' }} key={post.id}>
//             {i}: {post.title}
//           </h1>
//         ))}
//       </ul>
//       {/*<img*/}
//       {/*  style={{ height: '100px', width: '100px' }}*/}
//       {/*  alt="Puppy"*/}
//       {/*  src="https://sun9-5.userapi.com/7iBELX70I-GgnCnTUQRIJht-QDoTtUACKgKPDw/9JgeLPAWup8.jpg"*/}
//       {/*/>*/}
//     </div>
//   );
// };
//
// export default Test;
import React from 'react';

const Test = ({ data }: any) => {
  return <h1 style={{ color: 'whitesmoke' }}>{data?.getAllCars[0]?.brand}</h1>;
};

export default Test;

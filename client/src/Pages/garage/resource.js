import { useApolloClient, useLazyQuery } from '@apollo/client';
import { GET_ONE_CAR } from '../../Apollo/query/quecar';

export const useResource = (lim) => {
  return {
    posts: wrapPromise(fetchPosts(lim)),
    // users: wrapPromise(fetchUsers()),
  };
};
export const useUseGetOneCar = (carId) => {
  // console.log(carId);
  return {
    oneCar: wrapPromise(useGetOneCar(carId)),
  };
};
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

function wrapPromise(promise) {
  let status = 'pending';
  let result;
  console.log(promise.then((r) => r));
  const suspender = promise.then(
    (r) => {
      result = r;
      status = 'success';
    },
    (e) => {
      result = e;
      status = 'error';
    },
  );

  return {
    read: () => {
      console.log(status);
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
}

async function fetchPosts(lim) {
  await delay(1000);
  // console.log(fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${lim}`));
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${lim}`);
  return await res.json();
  // return delay(1000)
  //   .then(() => )
  //   .then((res) => res.json());
}

async function useGetOneCar(id) {
  const [getOneCarReq, { data, loading, error }] = useLazyQuery(GET_ONE_CAR, {
    variables: {
      id,
    },
    errorPolicy: 'all',
  });
  //
  // const client = useApolloClient();

  await delay(1000);
  // console.log(getOneCarReq());
  // const myquery =  await client.query({
  //   query: GET_ONE_CAR,
  //   variables: {
  //     id,
  //   },
  // });
  const res = await getOneCarReq();
  // console.log(myquery);
  // console.log(myquery.data.getOneCar);
  console.log(res.data.getOneCar);
  return await res.data.getOneCar;
  // return await myquery.data.getOneCar;
  // return getOneCarReq().then(({ data }) => data.getOneCar);

  //  /
}

async function fetchUsers() {
  await delay(1750);
  const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
  return await res.json();
}

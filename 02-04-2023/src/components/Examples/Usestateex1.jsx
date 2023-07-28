// import React, { useState } from "react";

// const Usestateex1 = () => {
//   const [inital, update] = useState(0);
//   let increment = () => {
//     update((inc) => inc + 1);
//   };
//   let decrement = () => {
//     update((inc) => inc - 1);
//   };
//   let reset = () => {
//     update(0);
//   };
//   let incrementby5 = () => {
//     for (let i = 0; i < 99999; i++) {
//       update((up) => up + 1);
//     }
//   };
//   return (
//     <div>
//       <h1>{inital}</h1>
//       <button onClick={increment}>increment</button>
//       <button onClick={decrement}>decrement</button>
//       <button onClick={reset}>Reset</button>
//       <button onClick={incrementby5}>increment by 5</button>
//     </div>
//   );
// };

// export default Usestateex1;

// import React, { useState } from "react";

// const Usestateex1 = () => {
//   const [name, setName] = useState({ firstname: "", lastname: "" });
//   return (
//     <div>
//       <form action="#">
//         <input
//           type="text"
//           placeholder="firstname"
//           value={name.firstname}
//           onChange={(e) => {
//             setName({ ...name, firstname: e.target.value });
//           }}
//         />

//         <input
//           type="text"
//           placeholder="lastname"
//           value={name.lastname}
//           onChange={(e) => {
//             setName({ ...name, lastname: e.target.value });
//           }}
//         />
//       </form>
//       <h1>Firstname : {name.firstname}</h1>
//       <h1>Lastname : {name.lastname}</h1>

//       <p>{JSON.stringify(name)}</p>
//     </div>
//   );
// };

// export default Usestateex1;

// ?

// import React, { useState } from "react";

// const UseStateex1 = () => {
//   const [items, setItem] = useState([]);
//   console.log(items);
//   let addItems = () => {
//     setItem([
//       ...items,
//       {
//         id: items.length,
//         value: Math.floor(Math.random() * 10) + 1,
//       },
//     ]);
//   };
//   return (
//     <div>
//       <button onClick={addItems}>Add items</button>
//       {items.map((item) => {
//         return (
//           <ul>
//             <li>{item.value}</li>
//           </ul>
//         );
//       })}
//     </div>
//   );
// };

// export default UseStateex1;

// ? change DOM title by increment using class base

// import React, { Component } from "react";

// export default class UseStateex1 extends Component {
//   state = {
//     count: 0,
//   };
//   clickHanlder = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   componentDidMount() {
//     document.title = `your enter ${this.state.count} times`;
//   }
//   componentDidUpdate() {
//     document.title = `your enter ${this.state.count} times`;
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.clickHanlder}>change title</button>
//       </div>
//     );
//   }
// }

// ? using function base

// import React, { useEffect, useState } from "react";

// const Usestateex1 = () => {
//   const [count, setcount] = useState(0);
//   let handle = () => {
//     setcount((p) => p + 1);
//   };
//   useEffect(() => {
//     document.title = `you enter ${count} times`;
//   });
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handle}>click me</button>
//     </div>
//   );
// };

// export default Usestateex1;

// ? fetch JSON data

import React, { useEffect, useState } from "react";

const UseEffectEx1 = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    window
      .fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) =>
        res.json().then((data) => {
          console.log(data);
          setProducts(data);
        })
      )
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <table>
        {products.map((x) => {
          return (
            <>
              <li>{x.title}</li>
              <li>{x.body}</li>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default UseEffectEx1;

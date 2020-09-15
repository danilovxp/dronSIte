const MyReact = (function () {
  let globals = {};
  return {
    render(Component) {
      const Comp = Component();
      Comp.render();
      return Comp;
    },
    useState(initialValue) {
      _val = _val || initialValue;
      function setState(newVal) {
        _val = newVal;
      }
      return [_val, setState];
    },
  };
})();

function Counter() {
  const [count, setCount] = MyReact.useState(0);

  return {
    click: () => setCount(count + 1),
    render: () => console.log("render:", { count }),
  };
}

let App;
App = MyReact.render(Counter);
App.click();
App = MyReact.render(Counter);

// const FComponent = () => {
//   const [user, setUser] = React.useState({ name: '', lastName: '' });
//   const [isPopUpShown, setShowPopUp] = React.useState(false);

//   const handleClick = () => {
//     setUser({ name: 'Sergey', lastName: 'Vats' });
//   }

//   return (
//     <a onClick={() => handleClick}>
//       Hello {user.name} {user.lastName}
//     </a>
//     <p style={{ display: isPopUpShown ? 'block': 'none' }}></p>
//   )
// }

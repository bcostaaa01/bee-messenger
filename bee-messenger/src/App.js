import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const notify = () => toast("Hello World!",
  {
    duration: 3000,
    icon: '👏',
    ariaProps: {
      role: 'status',
      'aria-live': 'polite'
    }
  }
  );

  return (
    <div className="App">
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};

export default App;

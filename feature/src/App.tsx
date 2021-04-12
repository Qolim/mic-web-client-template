import { useEffect, useState } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { QianKunProps } from "./type";
import "./App.css";

export default function App({ baseServe, history }: QianKunProps): JSX.Element {
  const [qiankunGlobalStore, setQiankunGlobalStore] = useState<any>({});

  function goHomeOne() {
    history?.push("/home/home-one");
  }

  useEffect(() => {
    baseServe?.then((res) => {
      setQiankunGlobalStore(res);
    });
  }, []);

  return (
    <>
      <h1 className="title">FEATURE - {qiankunGlobalStore.user}</h1>
      <main className="main-content">
        <nav>
          <Link to="/feature-one">feature-one</Link>
          <Link to="/feature-two">feature-two</Link>
          <Link to="/feature-three">feature-three</Link>
          <a onClick={goHomeOne}>home-one</a>
        </nav>
        <Switch>
          <Route exact path="/">
            <Redirect to="/feature-one" />
          </Route>
          <Route path="/feature-one">
            <h1>FEATURE ONE</h1>
          </Route>
          <Route path="/feature-two">
            <h1>FEATURE TWO</h1>
          </Route>
          <Route path="/feature-three">
            <h1>FEATURE THREE</h1>
          </Route>
        </Switch>
      </main>
    </>
  );
}

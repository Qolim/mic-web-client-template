import { useEffect, useState } from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import { QianKunProps } from "./type";
import "./App.css";

export default function App({ history, baseServe }: QianKunProps): JSX.Element {
  const [baseServeStore, setBaseServeStore] = useState<any>({});

  function goFeature(path: string) {
    history?.push(path);
  }

  useEffect(() => {
    baseServe?.then((res) => {
      setBaseServeStore(res);
    });
  }, []);

  return (
    <>
      <h1 className="title">HOME - {baseServeStore.user}</h1>
      <main className="main-content">
        <nav>
          <Link to="/home-one">home-one</Link>
          <Link to="/home-two">home-two</Link>
          <a onClick={() => goFeature("/feature/feature-one")}>feature-one</a>
          <a onClick={() => goFeature("/feature/feature-two")}>feature-two</a>
        </nav>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home-one" />
          </Route>
          <Route path="/home-one">
            <h1>HOME ONE</h1>
          </Route>
          <Route path="/home-two">
            <h1>HOME TWO</h1>
          </Route>
        </Switch>
      </main>
    </>
  );
}

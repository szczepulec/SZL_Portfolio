import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import NotesPage from "./pages/NotesPage";

import SplashScreen from "./containers/splashScreen/SplashScreen";
import { splashScreen } from "./portfolio";
import { StyleProvider } from "./contexts/StyleContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useLocation } from "react-router-dom";

function App() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => clearTimeout(splashTimer);
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark, changeTheme }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/projects" component={ProjectsPage} />
              <Route path="/notes" component={NotesPage} />
            </Switch>
          </Router>
        )}
      </StyleProvider>
    </div>
  );
}

export default App;
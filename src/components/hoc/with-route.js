import React from "react";
import { Provider } from "react-redux";
import ErrorBoundry from "../error-boundry";
import { BookstoreProvider } from "../bookstore-context";
import BookstoreService from "../../services/bookstore-service";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../store";

const bookstoreService = new BookstoreService();

const withRoute = Wrapper => {
  return () => (
    <Provider store={store}>
      <ErrorBoundry>
        <BookstoreProvider value={bookstoreService}>
          <Router>
            <Wrapper />
          </Router>
        </BookstoreProvider>
      </ErrorBoundry>
    </Provider>
  );
};
export default withRoute;

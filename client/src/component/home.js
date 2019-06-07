import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "100px" }}>
        <p>
          JWT Authentication using MongoDB, ExpressJS, ReactJS and NodeJS
          <span className="text-success lead">
            <strong> (MERN) </strong>
          </span>
          used PassportJS for JWT Authentication. Accessing of private API's
          using JWT tokens is done using Passport. Here we perform both
          Authentication and Authorization.
        </p>
        <h3>Authentication</h3>
        <p className="text-justify">
          Authentication is about validating your credentials like User
          Name/User ID and password to verify your identity. The system
          determines whether you are what you say you are using your
          credentials. In public and private networks, the system authenticates
          the user identity via login passwords. Authentication is usually done
          by a username and password, and sometimes in conjunction with factors
          of authentication, which refers to the various ways to be
          authenticated. Authentication factors determine the various elements
          the system use to verify one’s identity prior to granting him access
          to anything from accessing a file to requesting a bank transaction. A
          user’s identity can be determined by what he knows, what he has, or
          what he is. When it comes to security, at least two or all the three
          authentication factors must be verified in order to grant someone
          access to the system.
        </p>
        <h3>Authorization</h3>
        <p className="text-justify">
          Authorization Authorization, on the other hand, occurs after your
          identity is successfully authenticated by the system, which ultimately
          gives you full permission to access the resources such as information,
          files, databases, funds, locations, almost anything. In simple terms,
          authorization determines your ability to access the system and up to
          what extent. Once your identity is verified by the system after
          successful authentication, you are then authorized to access the
          resources of the system. Authorization is the process to determine
          whether the authenticated user has access to the particular resources.
          It verifies your rights to grant you access to resources such as
          information, databases, files, etc. Authorization usually comes after
          authentication which confirms your privileges to perform. In simple
          terms, it’s like giving someone official permission to do something or
          anything.
        </p>
      </div>
    );
  }
}

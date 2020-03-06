import React from "react";

export default function SignUp(props) {
  return (
    <div>
      <table>
        <caption>
          <h3>Sign Up</h3>
        </caption>
        <tbody>
          <tr>
            <td>First Name:</td>
            <td>
              <input type="text" value = {props.fname} onChange={props.change}/>
            </td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td>
              <input type="text" value = {props.lname} onChange={props.change}/>
            </td>
          </tr>
          <tr>
            <td>Date of Birth:</td>
            <td>
              <input type="date" />
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <input type="email" />
            </td>
          </tr>
          <tr>
            <td>Password:</td>
            <td>
              <input type="password" />
            </td>
          </tr>
          <tr>
            <td>Confirm Password:</td>
            <td>
              <input type="password" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="submit" onClick={props.click} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

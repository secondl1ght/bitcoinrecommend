import React from "react";

export default function Nodes() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div>
        <button id="nodes" type="button" name="nodes" onClick={handleOnClick}>
          Nodes
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Nodes</h2>
        <h3>Have direct access to the bitcoin network!</h3>
        <h4>
          <a href="https://mynodebtc.com/" target="_blank" rel="noreferrer">
            myNode
          </a>
        </h4>
        <p>
          myNode is my #1 recommendation for plug and play bitcoin nodes. It is
          easy to use and backed by a committed developer team. You will have an
          easy to setup and use bitcoin and lightning node as well as tons of
          additional applications that should cover most of your interests.
        </p>
        <br />
        <h4>
          <a href="https://ronindojo.io/" target="_blank" rel="noreferrer">
            RoninDojo
          </a>
        </h4>
        <p>
          If you like what the Samourai team is doing and want to complete the
          stack, then RoninDojo is what you are looking for. This node will not
          come with lightning though, if you are looking for an all in one
          option.
        </p>
        <br />
        <h4>
          <a href="https://start9.com/" target="_blank" rel="noreferrer">
            Start9
          </a>
        </h4>
        <p>
          Are you looking for more than just a bitcoin node? Start9 has released
          a new type of home device where you can self-host basically anything,
          and do it easily with their custom OS and interface.
        </p>
      </div>
    );
  }
}

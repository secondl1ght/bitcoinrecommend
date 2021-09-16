import React from "react";

export default function SoftWallets() {
  const [initial, setInitial] = React.useState(true);

  function handleOnClick() {
    setInitial(false);
  }

  if (initial === true) {
    return (
      <div>
        <button
          id="softwarewallets"
          type="button"
          name="softwarewallets"
          onClick={handleOnClick}
        >
          Software Wallets
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Software Wallets</h2>
        <h3>Access your bitcoin</h3>
        <h4>
          <a href="https://electrum.org/#home" target="_blank" rel="noreferrer">
            Electrum
          </a>
        </h4>
        <p>
          One of the oldest and the most feature-rich wallets, there is a reason
          it has such a big fanbase. Few wallets will give you access to this
          many features such as multi-sig, coin-control, freezing addresses,
          exporting transactions, RBF and more! Available on desktop and mobile
          on all platforms.
        </p>
        <br />
        <h4>
          <a
            href="https://samouraiwallet.com/"
            target="_blank"
            rel="noreferrer"
          >
            Samourai Wallet
          </a>
        </h4>
        <p>
          The one-stop-shop privacy focused wallet. If you want the most
          cutting-edge bitcoin privacy features packed into one easy to use
          mobile wallet, then this is for you.
        </p>
      </div>
    );
  }
}

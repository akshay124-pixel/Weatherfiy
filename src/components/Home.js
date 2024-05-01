import React from "react";
import Weather from "./Weather";

function Home() {
  const svgImage = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
      <g mask="url(&quot;#SvgjsMask1000&quot;)" fill="none">
        <rect width="1440" height="560" x="0" y="0" fill="#0e2a47"></rect>
        <path d="M1059.5497893219656 448.17816326044897L1146.8421861288707 363.88087553801574 1062.5448984064376 276.5884787311107 975.2525015995324 360.88576645354385z" fill="rgba(28, 83, 142, 0.4)" class="triangle-float2"></path>
        <path d="M264.269908221593 407.06031583836943L117.88820686547015 427.6329223321152 138.46081335921588 574.0146236882381 284.8425147153388 553.4420171944923z" fill="rgba(28, 83, 142, 0.4)" class="triangle-float3"></path>
        <path d="M522.648,483.858C560.439,482.48,590.316,454.623,607.931,421.16C624.258,390.143,624.822,353.407,607.296,323.051C589.77,292.694,557.693,272.677,522.648,273.441C488.788,274.18,462.153,297.915,444.162,326.609C424.647,357.734,409.463,394.927,425.869,427.797C443.713,463.549,482.717,485.314,522.648,483.858" fill="rgba(28, 83, 142, 0.4)" class="triangle-float1"></path>
        <path d="M116.48526425201543 551.5665630209412L167.28659052872376 577.4511316269942 180.71278029944898 488.3068579089052z" fill="rgba(28, 83, 142, 0.4)" class="triangle-float2"></path>
        <path d="M1292.8974701371774 250.49357293415574L1346.7941022514613 383.8924185236339 1480.1929478409393 329.99578640935016 1426.2963157266556 196.59694081987197z" fill="rgba(28, 83, 142, 0.4)" class="triangle-float2"></path>
        <path d="M1260.873183540716 189.15165577022893L1176.5589152747848 207.0732067325591 1278.7947345030461 273.46592403616z" fill="rgba(28, 83, 142, 0.4)" class="triangle-float3"></path>
      </g>
      <defs>
        <mask id="SvgjsMask1000">
          <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
        <style>
          @keyframes float1 {
            0%{transform: translate(0, 0)}
            50%{transform: translate(-10px, 0)}
            100%{transform: translate(0, 0)}
          }

          .triangle-float1 {
            animation: float1 5s infinite;
          }

          @keyframes float2 {
            0%{transform: translate(0, 0)}
            50%{transform: translate(-5px, -5px)}
            100%{transform: translate(0, 0)}
          }

          .triangle-float2 {
            animation: float2 4s infinite;
          }

          @keyframes float3 {
            0%{transform: translate(0, 0)}
            50%{transform: translate(0, -10px)}
            100%{transform: translate(0, 0)}
          }

          .triangle-float3 {
            animation: float3 6s infinite;
          }
        </style>
      </defs>
    </svg>
  `);

  return (
    <div
      className="Home"
      style={{
        position: "relative",
        backgroundImage: `url("data:image/svg+xml,${svgImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <Weather />
      </div>
    </div>
  );
}

export default Home;

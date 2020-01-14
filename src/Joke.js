import React from 'react'
import SwipeableViews from 'react-swipeable-views';

function Joke() {
  return (
    <div className="page__joke">

      <SwipeableViews className="page__swipe">
        <div className="joke-card">
          <div className="joke-background">
            <p className="joke">My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.</p>
          </div>
        </div>
  
        <div className="joke-card">
          <div className="joke-background">
            <p className="joke">My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.</p>
          </div>
        </div>

        <div className="joke-card">
          <div className="joke-background">
            <p className="joke">My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.</p>
          </div>
        </div>
      </SwipeableViews>

      <h3 className="sharing-message">Don't laugh alone, Share!</h3>

      <div className="sharing-icons">

        <div className="share-instagram">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#304ffe" d="M32,42H16c-5.5,0-10-4.5-10-10V16c0-5.5,4.5-10,10-10h16c5.5,0,10,4.5,10,10v16 C42,37.5,37.5,42,32,42z"/><path fill="#304ffe" fill-opacity=".29" d="M6,16v16c0,5.5,4.5,10,10,10h16c5.5,0,10-4.5,10-10V16c0-1-0.1-1.9-0.4-2.8 C36,8.7,28.8,6,21,6c-3.7,0-7.3,0.6-10.7,1.8C7.7,9.6,6,12.6,6,16z"/><path fill="#6200ea" d="M21,8c-5,0-9.6,1.2-13.8,3.2C6.4,12.7,6,14.3,6,16v16c0,5.5,4.5,10,10,10h16c5.5,0,10-4.5,10-10 V16.2C36.5,11.1,29.1,8,21,8z"/><path fill="#673ab7" d="M42,19c-5.3-5.5-12.7-9-21-9c-5.4,0-10.5,1.5-14.8,4.1C6.1,14.7,6,15.3,6,16v16c0,5.5,4.5,10,10,10 h16c5.5,0,10-4.5,10-10V19z"/><path fill="#8e24aa" d="M42,22c-4.9-6.1-12.5-10-21-10c-5.6,0-10.7,1.7-15,4.6V32c0,5.5,4.5,10,10,10h16c5.5,0,10-4.5,10-10 V22z"/><path fill="#c2185b" d="M42,32v-6.6C37.5,18.6,29.8,14,21,14c-5.6,0-10.8,1.9-15,5v13c0,5.5,4.5,10,10,10h16 C37.5,42,42,37.5,42,32z"/><path fill="#d81b60" d="M42,32v-2.4C38.4,21.6,30.4,16,21,16c-5.7,0-11,2.1-15,5.6V32c0,5.5,4.5,10,10,10h16 C37.5,42,42,37.5,42,32z"/><path fill="#f50057" d="M41.6,34.8C39.7,25.2,31.2,18,21,18c-5.9,0-11.2,2.4-15,6.3V32c0,5.5,4.5,10,10,10h16 C36.5,42,40.4,39,41.6,34.8z"/><path fill="#ff1744" d="M39.9,38C39.4,28,31.2,20,21,20c-6.1,0-11.5,2.9-15,7.4V32c0,5.5,4.5,10,10,10h16 C35.2,42,38.1,40.4,39.9,38z"/><path fill="#ff5722" d="M21,22c-6.5,0-12.1,3.6-15,9v1c0,5.5,4.5,10,10,10h16c2.2,0,4.3-0.7,5.9-2c0-0.3,0.1-0.7,0.1-1 C38,29.6,30.4,22,21,22z"/><path fill="#ff6f00" d="M21,24c-7,0-12.8,4.7-14.5,11.2c1.3,4,5.1,6.8,9.5,6.8h16c1.4,0,2.6-0.3,3.8-0.8 c0.1-0.7,0.2-1.5,0.2-2.2C36,30.7,29.3,24,21,24z"/><path fill="#ff9800" d="M21,26c-6.9,0-12.5,5.3-12.9,12c1.8,2.4,4.7,4,7.9,4h16c0.6,0,1.1-0.1,1.7-0.2 C33.9,40.9,34,40,34,39C34,31.8,28.2,26,21,26z"/><path fill="#ffc107" d="M31.6,42c0.3-1,0.4-2,0.4-3c0-6.1-4.9-11-11-11s-11,4.9-11,11c0,0.3,0,0.7,0.1,1 c1.7,1.2,3.7,2,5.9,2H31.6z"/><path fill="#ffd54f" d="M21,30c-5,0-9,4-9,9c0,0.8,0.1,1.6,0.3,2.3c1.1,0.5,2.4,0.7,3.7,0.7h13.5c0.3-0.9,0.5-1.9,0.5-3 C30,34,26,30,21,30z"/><path fill="#ffe082" d="M21,32.1c-3.9,0-7,3.1-7,7c0,1,0.2,1.9,0.6,2.8C15.1,42,15.5,42,16,42h11.4c0.4-0.9,0.6-1.9,0.6-2.9 C28,35.2,24.9,32.1,21,32.1z"/><path fill="#ffecb3" d="M21,34.1c-2.8,0-5,2.2-5,5c0,1.1,0.4,2.1,1,2.9H25c0.6-0.8,1-1.8,1-2.9C26,36.3,23.8,34.1,21,34.1z"/><path fill="#fff" d="M30,38H18c-4.4,0-8-3.6-8-8V18c0-4.4,3.6-8,8-8h12c4.4,0,8,3.6,8,8v12C38,34.4,34.4,38,30,38z M18,12c-3.3,0-6,2.7-6,6v12c0,3.3,2.7,6,6,6h12c3.3,0,6-2.7,6-6V18c0-3.3-2.7-6-6-6H18z"/><path fill="#fff" d="M24 31c-3.9 0-7-3.1-7-7 0-3.9 3.1-7 7-7 3.9 0 7 3.1 7 7C31 27.9 27.9 31 24 31zM24 19c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5S26.8 19 24 19zM32 16c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1S32 15.4 32 16z"/></svg>
        </div>

        <div className="share-facebook">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100px" height="100px"><path fill="#78a2d2" d="M50 15A35 35 0 1 0 50 85A35 35 0 1 0 50 15Z"/><path fill="#1f212b" d="M77.237 64.039c-.074 0-.148-.017-.219-.051-.248-.121-.352-.42-.23-.668.198-.408.388-.819.566-1.233.694-1.612 1.247-3.299 1.643-5.014.063-.27.328-.438.6-.375.27.063.437.331.375.6-.409 1.773-.981 3.518-1.699 5.185-.185.429-.38.854-.586 1.275C77.601 63.936 77.422 64.039 77.237 64.039zM80.383 53.394c-.016 0-.03-.001-.045-.002-.275-.024-.479-.268-.454-.542.058-.647.095-1.296.111-1.944.102-4.025-.589-7.962-2.051-11.703-.101-.257.026-.547.284-.648.257-.101.547.027.647.284 1.511 3.866 2.224 7.934 2.119 12.093-.017.67-.056 1.34-.115 2.007C80.856 53.198 80.639 53.394 80.383 53.394zM27.735 29.728c-.123 0-.245-.044-.341-.135-.202-.188-.212-.504-.024-.707 5.049-5.408 11.882-8.824 19.238-9.618.277-.023.521.169.551.443.03.274-.169.521-.443.551-7.118.768-13.729 4.073-18.614 9.306C28.002 29.675 27.869 29.728 27.735 29.728zM29.278 72.784c-.123 0-.245-.045-.341-.135-10.553-9.853-12.957-25.46-5.845-37.955.136-.24.441-.325.682-.187.24.137.324.442.187.682-6.881 12.09-4.554 27.194 5.659 36.729.202.188.212.505.024.706C29.545 72.73 29.412 72.784 29.278 72.784zM63.348 78.001c-.186 0-.364-.104-.45-.283-.12-.248-.016-.547.233-.667 3.324-1.603 6.3-3.796 8.843-6.519 1.025-1.1 1.974-2.28 2.817-3.51.156-.227.468-.285.695-.129s.285.467.129.695c-.871 1.271-1.851 2.49-2.911 3.625-2.628 2.814-5.702 5.081-9.14 6.737C63.495 77.985 63.421 78.001 63.348 78.001z"/><path fill="#fefdef" d="M44.5,84V59.5h-9v-9h9l0-8.971c-0.195-8.049,5.897-15.88,20-11.538L64.471,38.5l-4.901-0.032 c-3.77,0-5.069,1.246-5.069,3.962v8.07h10.776l-1.894,9H54.5V84"/><path fill="#1f212b" d="M55,84h-1V59h8.977l1.683-8H54v-8.57c0-3.128,1.666-4.462,5.569-4.462l4.403,0.029l0.026-7.634 c-6.137-1.817-11.193-1.399-14.641,1.211c-2.87,2.174-4.458,5.798-4.358,9.943V51h-9v8h9v25h-1V60h-9V50h9v-8.471 c-0.108-4.459,1.625-8.382,4.754-10.752c2.636-1.996,7.534-3.836,15.893-1.264l0.354,0.109l-0.032,9.381l-5.402-0.036 c-3.802,0-4.566,1.325-4.566,3.462V50h10.892l-2.104,10H55V84z"/><g><path fill="#1f212b" d="M50,86c-19.851,0-36-16.149-36-36s16.149-36,36-36s36,16.149,36,36S69.851,86,50,86z M50,16 c-18.748,0-34,15.252-34,34c0,18.748,15.252,34,34,34c18.748,0,34-15.252,34-34C84,31.252,68.748,16,50,16z"/></g></svg>
        </div>

        <div className="share-whatsapp">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100px" height="100px"><path fill="#fff" d="M50,16c-18.778,0-34,15.222-34,34c0,6.112,1.621,11.843,4.444,16.799l-4.407,15.933 c-0.207,0.749,0.481,1.438,1.23,1.23l15.933-4.407C38.157,82.379,43.888,84,50,84c18.778,0,34-15.222,34-34 C84,31.222,68.778,16,50,16z"/><path fill="#60be92" d="M50,22c-15.464,0-28,12.536-28,28c0,6.122,1.97,11.78,5.303,16.388L24.89,75.11l8.723-2.413 C38.221,76.03,43.879,78,50,78c15.464,0,28-12.536,28-28C78,34.536,65.464,22,50,22z"/><path fill="#fff" d="M41.896,35.949c-0.608-1.375-1.25-1.402-1.832-1.422c-0.475-0.02-1.016-0.02-1.558-0.02 c-0.535,0-1.417,0.203-2.159,1.029c-0.749,0.819-2.848,2.81-2.848,6.86c0,4.043,2.915,7.957,3.316,8.505 c0.408,0.542,5.622,9.115,13.871,12.413c6.859,2.736,8.256,2.194,9.74,2.059c1.491-0.142,4.807-1.991,5.482-3.914 c0.675-1.916,0.675-3.562,0.475-3.907c-0.201-0.345-0.742-0.549-1.558-0.962c-0.809-0.413-4.8-2.397-5.549-2.675 c-0.742-0.271-1.284-0.406-1.825,0.413c-0.541,0.819-2.099,2.675-2.574,3.223c-0.475,0.549-0.943,0.616-1.758,0.21 c-0.809-0.413-3.423-1.28-6.525-4.083c-2.413-2.18-4.044-4.869-4.519-5.695c-0.475-0.819-0.053-1.266,0.354-1.679 c0.368-0.366,0.816-0.962,1.223-1.442c0.401-0.481,0.535-0.819,0.809-1.368c0.267-0.549,0.134-1.029-0.067-1.442 C44.196,41.637,42.618,37.574,41.896,35.949z"/><path fill="#1f212b" d="M16.991,85.001c-0.521,0-1.021-0.204-1.404-0.588c-0.517-0.516-0.708-1.244-0.514-1.947l4.298-15.536 C16.51,61.764,15,55.919,15,50c0-19.299,15.701-35,35-35s35,15.701,35,35S69.299,85,50,85c-5.919,0-11.764-1.51-16.93-4.371 l-15.536,4.298C17.354,84.977,17.171,85.001,16.991,85.001z M33.201,78.556c0.172,0,0.343,0.044,0.495,0.131 C38.649,81.509,44.287,83,50,83c18.196,0,33-14.804,33-33S68.196,17,50,17S17,31.804,17,50c0,5.713,1.491,11.351,4.313,16.304 c0.132,0.231,0.166,0.505,0.095,0.762l-4.407,15.934l15.934-4.407C33.022,78.567,33.112,78.556,33.201,78.556z"/><path fill="#1f212b" d="M58.768,66.008c-1.412,0-3.61-0.373-8.266-2.229c-4.988-1.994-9.93-6.371-13.913-12.323 c-0.086-0.127-0.143-0.214-0.173-0.254C35.371,49.774,33,46.133,33,42.396c0-4.002,1.984-6.13,2.832-7.039l0.146-0.158 c0.966-1.076,2.09-1.192,2.528-1.192c0.55,0,1.098,0,1.579,0.021c0.772,0.027,1.587,0.183,2.268,1.72 c0.428,0.963,1.14,2.741,1.712,4.169c0.363,0.906,0.706,1.762,0.781,1.917c0.21,0.434,0.445,1.101,0.066,1.879l-0.123,0.251 c-0.21,0.43-0.376,0.77-0.752,1.219c-0.135,0.159-0.271,0.328-0.409,0.497c-0.285,0.352-0.58,0.716-0.846,0.979 c-0.4,0.406-0.553,0.592-0.273,1.074c0.568,0.989,2.134,3.509,4.421,5.574c2.528,2.285,4.687,3.237,5.847,3.748 c0.238,0.104,0.43,0.19,0.57,0.262c0.681,0.34,0.873,0.231,1.153-0.092c0.496-0.574,2.02-2.393,2.534-3.172 c0.792-1.2,1.768-0.842,2.413-0.607c0.818,0.303,4.97,2.375,5.605,2.699l0.442,0.219c0.628,0.307,1.082,0.528,1.32,0.937 c0.326,0.563,0.229,2.436-0.436,4.325c-0.773,2.2-4.343,4.097-5.906,4.246c-0.141,0.013-0.278,0.028-0.42,0.046 C59.676,65.96,59.271,66.008,58.768,66.008z M38.536,35.006c-0.251,0-1.067,0.029-1.816,0.863l-0.156,0.169 C35.731,36.931,34,38.788,34,42.396c0,3.442,2.236,6.867,3.197,8.181c0.053,0.07,0.122,0.172,0.223,0.322 c3.872,5.787,8.65,10.031,13.453,11.951c6.078,2.424,7.734,2.229,9.064,2.073c0.15-0.019,0.297-0.035,0.444-0.049 c1.292-0.123,4.45-1.859,5.056-3.582c0.624-1.772,0.615-3.244,0.507-3.504c-0.078-0.132-0.452-0.315-0.887-0.526l-0.457-0.227 c-0.944-0.482-4.804-2.396-5.497-2.652c-0.721-0.262-0.908-0.272-1.234,0.22c-0.584,0.885-2.234,2.839-2.612,3.275 c-0.808,0.933-1.687,0.667-2.359,0.33c-0.133-0.067-0.308-0.144-0.523-0.239c-1.125-0.496-3.466-1.527-6.113-3.921 c-2.394-2.162-4.026-4.788-4.617-5.816c-0.672-1.16,0.046-1.889,0.431-2.279c0.239-0.238,0.509-0.572,0.778-0.904 c0.142-0.175,0.283-0.35,0.42-0.511c0.296-0.354,0.425-0.617,0.619-1.015l0.125-0.254c0.147-0.302,0.127-0.594-0.07-1.001 c-0.086-0.178-0.35-0.834-0.809-1.98c-0.569-1.421-1.278-3.189-1.698-4.136V36.15c-0.484-1.093-0.885-1.106-1.393-1.124 C39.583,35.006,39.061,35.006,38.536,35.006z"/><path fill="#1f212b" d="M50,78c-5.697,0-11.175-1.704-15.858-4.931l-9.118,2.522c-0.176,0.05-0.36-0.001-0.487-0.128 s-0.177-0.313-0.128-0.487l2.521-9.117C23.704,61.176,22,55.698,22,50c0-15.439,12.561-28,28-28c2.574,0,5.144,0.357,7.636,1.063 c0.266,0.075,0.421,0.352,0.346,0.617s-0.355,0.42-0.617,0.346C54.96,23.345,52.482,23,50,23c-14.888,0-27,12.112-27,27 c0,5.57,1.688,10.923,4.884,15.479c0.086,0.122,0.112,0.276,0.072,0.421l-2.35,8.493l8.494-2.35 c0.143-0.042,0.298-0.013,0.421,0.072C39.078,75.312,44.431,77,50,77c14.888,0,27-12.112,27-27c0-7.181-2.789-13.941-7.854-19.036 c-0.194-0.196-0.194-0.513,0.002-0.707s0.513-0.194,0.707,0.002C75.107,35.543,78,42.554,78,50C78,65.439,65.439,78,50,78z"/><path fill="#1f212b" d="M63.5 26.545c-.084 0-.168-.021-.246-.064-.963-.545-1.954-1.028-2.945-1.438-.255-.105-.376-.397-.271-.653.104-.254.398-.378.653-.271 1.028.426 2.057.928 3.055 1.491.24.136.325.441.189.682C63.844 26.453 63.674 26.545 63.5 26.545zM67.5 29.286c-.112 0-.225-.037-.318-.114-.619-.512-1.28-1.007-1.964-1.474-.228-.156-.286-.467-.131-.695.156-.228.468-.284.695-.131.708.483 1.394.998 2.036 1.528.213.176.243.491.067.704C67.787 29.225 67.644 29.286 67.5 29.286z"/></svg>
        </div>

      </div>

    </div>
  )
}

export default Joke;

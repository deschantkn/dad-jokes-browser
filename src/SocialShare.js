import React from 'react'

function SocialShare(props) {
  const { joke } = props;

  // TODO: Add website url
  const message = `${joke} - More dad jokes on *https://djbrowse.herokuapp.com/*!`;

  return (
    <React.Fragment>
      <h3 className="sharing-message">Don't laugh alone, Share!</h3>

      <div className="sharing-icons">

        <a href={`whatsapp://send?text=${message}`} data-action="share/whatsapp/share">
          <div className="share-whatsapp">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100px" height="100px"><path fill="#fff" d="M50,16c-18.778,0-34,15.222-34,34c0,6.112,1.621,11.843,4.444,16.799l-4.407,15.933 c-0.207,0.749,0.481,1.438,1.23,1.23l15.933-4.407C38.157,82.379,43.888,84,50,84c18.778,0,34-15.222,34-34 C84,31.222,68.778,16,50,16z"/><path fill="#60be92" d="M50,22c-15.464,0-28,12.536-28,28c0,6.122,1.97,11.78,5.303,16.388L24.89,75.11l8.723-2.413 C38.221,76.03,43.879,78,50,78c15.464,0,28-12.536,28-28C78,34.536,65.464,22,50,22z"/><path fill="#fff" d="M41.896,35.949c-0.608-1.375-1.25-1.402-1.832-1.422c-0.475-0.02-1.016-0.02-1.558-0.02 c-0.535,0-1.417,0.203-2.159,1.029c-0.749,0.819-2.848,2.81-2.848,6.86c0,4.043,2.915,7.957,3.316,8.505 c0.408,0.542,5.622,9.115,13.871,12.413c6.859,2.736,8.256,2.194,9.74,2.059c1.491-0.142,4.807-1.991,5.482-3.914 c0.675-1.916,0.675-3.562,0.475-3.907c-0.201-0.345-0.742-0.549-1.558-0.962c-0.809-0.413-4.8-2.397-5.549-2.675 c-0.742-0.271-1.284-0.406-1.825,0.413c-0.541,0.819-2.099,2.675-2.574,3.223c-0.475,0.549-0.943,0.616-1.758,0.21 c-0.809-0.413-3.423-1.28-6.525-4.083c-2.413-2.18-4.044-4.869-4.519-5.695c-0.475-0.819-0.053-1.266,0.354-1.679 c0.368-0.366,0.816-0.962,1.223-1.442c0.401-0.481,0.535-0.819,0.809-1.368c0.267-0.549,0.134-1.029-0.067-1.442 C44.196,41.637,42.618,37.574,41.896,35.949z"/><path fill="#1f212b" d="M16.991,85.001c-0.521,0-1.021-0.204-1.404-0.588c-0.517-0.516-0.708-1.244-0.514-1.947l4.298-15.536 C16.51,61.764,15,55.919,15,50c0-19.299,15.701-35,35-35s35,15.701,35,35S69.299,85,50,85c-5.919,0-11.764-1.51-16.93-4.371 l-15.536,4.298C17.354,84.977,17.171,85.001,16.991,85.001z M33.201,78.556c0.172,0,0.343,0.044,0.495,0.131 C38.649,81.509,44.287,83,50,83c18.196,0,33-14.804,33-33S68.196,17,50,17S17,31.804,17,50c0,5.713,1.491,11.351,4.313,16.304 c0.132,0.231,0.166,0.505,0.095,0.762l-4.407,15.934l15.934-4.407C33.022,78.567,33.112,78.556,33.201,78.556z"/><path fill="#1f212b" d="M58.768,66.008c-1.412,0-3.61-0.373-8.266-2.229c-4.988-1.994-9.93-6.371-13.913-12.323 c-0.086-0.127-0.143-0.214-0.173-0.254C35.371,49.774,33,46.133,33,42.396c0-4.002,1.984-6.13,2.832-7.039l0.146-0.158 c0.966-1.076,2.09-1.192,2.528-1.192c0.55,0,1.098,0,1.579,0.021c0.772,0.027,1.587,0.183,2.268,1.72 c0.428,0.963,1.14,2.741,1.712,4.169c0.363,0.906,0.706,1.762,0.781,1.917c0.21,0.434,0.445,1.101,0.066,1.879l-0.123,0.251 c-0.21,0.43-0.376,0.77-0.752,1.219c-0.135,0.159-0.271,0.328-0.409,0.497c-0.285,0.352-0.58,0.716-0.846,0.979 c-0.4,0.406-0.553,0.592-0.273,1.074c0.568,0.989,2.134,3.509,4.421,5.574c2.528,2.285,4.687,3.237,5.847,3.748 c0.238,0.104,0.43,0.19,0.57,0.262c0.681,0.34,0.873,0.231,1.153-0.092c0.496-0.574,2.02-2.393,2.534-3.172 c0.792-1.2,1.768-0.842,2.413-0.607c0.818,0.303,4.97,2.375,5.605,2.699l0.442,0.219c0.628,0.307,1.082,0.528,1.32,0.937 c0.326,0.563,0.229,2.436-0.436,4.325c-0.773,2.2-4.343,4.097-5.906,4.246c-0.141,0.013-0.278,0.028-0.42,0.046 C59.676,65.96,59.271,66.008,58.768,66.008z M38.536,35.006c-0.251,0-1.067,0.029-1.816,0.863l-0.156,0.169 C35.731,36.931,34,38.788,34,42.396c0,3.442,2.236,6.867,3.197,8.181c0.053,0.07,0.122,0.172,0.223,0.322 c3.872,5.787,8.65,10.031,13.453,11.951c6.078,2.424,7.734,2.229,9.064,2.073c0.15-0.019,0.297-0.035,0.444-0.049 c1.292-0.123,4.45-1.859,5.056-3.582c0.624-1.772,0.615-3.244,0.507-3.504c-0.078-0.132-0.452-0.315-0.887-0.526l-0.457-0.227 c-0.944-0.482-4.804-2.396-5.497-2.652c-0.721-0.262-0.908-0.272-1.234,0.22c-0.584,0.885-2.234,2.839-2.612,3.275 c-0.808,0.933-1.687,0.667-2.359,0.33c-0.133-0.067-0.308-0.144-0.523-0.239c-1.125-0.496-3.466-1.527-6.113-3.921 c-2.394-2.162-4.026-4.788-4.617-5.816c-0.672-1.16,0.046-1.889,0.431-2.279c0.239-0.238,0.509-0.572,0.778-0.904 c0.142-0.175,0.283-0.35,0.42-0.511c0.296-0.354,0.425-0.617,0.619-1.015l0.125-0.254c0.147-0.302,0.127-0.594-0.07-1.001 c-0.086-0.178-0.35-0.834-0.809-1.98c-0.569-1.421-1.278-3.189-1.698-4.136V36.15c-0.484-1.093-0.885-1.106-1.393-1.124 C39.583,35.006,39.061,35.006,38.536,35.006z"/><path fill="#1f212b" d="M50,78c-5.697,0-11.175-1.704-15.858-4.931l-9.118,2.522c-0.176,0.05-0.36-0.001-0.487-0.128 s-0.177-0.313-0.128-0.487l2.521-9.117C23.704,61.176,22,55.698,22,50c0-15.439,12.561-28,28-28c2.574,0,5.144,0.357,7.636,1.063 c0.266,0.075,0.421,0.352,0.346,0.617s-0.355,0.42-0.617,0.346C54.96,23.345,52.482,23,50,23c-14.888,0-27,12.112-27,27 c0,5.57,1.688,10.923,4.884,15.479c0.086,0.122,0.112,0.276,0.072,0.421l-2.35,8.493l8.494-2.35 c0.143-0.042,0.298-0.013,0.421,0.072C39.078,75.312,44.431,77,50,77c14.888,0,27-12.112,27-27c0-7.181-2.789-13.941-7.854-19.036 c-0.194-0.196-0.194-0.513,0.002-0.707s0.513-0.194,0.707,0.002C75.107,35.543,78,42.554,78,50C78,65.439,65.439,78,50,78z"/><path fill="#1f212b" d="M63.5 26.545c-.084 0-.168-.021-.246-.064-.963-.545-1.954-1.028-2.945-1.438-.255-.105-.376-.397-.271-.653.104-.254.398-.378.653-.271 1.028.426 2.057.928 3.055 1.491.24.136.325.441.189.682C63.844 26.453 63.674 26.545 63.5 26.545zM67.5 29.286c-.112 0-.225-.037-.318-.114-.619-.512-1.28-1.007-1.964-1.474-.228-.156-.286-.467-.131-.695.156-.228.468-.284.695-.131.708.483 1.394.998 2.036 1.528.213.176.243.491.067.704C67.787 29.225 67.644 29.286 67.5 29.286z"/></svg>
          </div>
        </a>

        <a href={`https://twitter.com/intent/tweet?text=${message}&hashtags=DadJoke`}>
          <div className="share-twitter">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"/></svg>
          </div>
        </a>
      </div>
    </React.Fragment>
  )
}

export default SocialShare;
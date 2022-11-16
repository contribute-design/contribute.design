import React from 'react'

const Logo: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="158" height="24" fill="none">
      <path
        fill="#fff"
        d="M8.058 12.984h2.714c-.04-.65-.196-1.21-.469-1.679a3.632 3.632 0 0 0-1.074-1.19 4.379 4.379 0 0 0-1.484-.723 6.224 6.224 0 0 0-1.718-.235c-.82 0-1.549.137-2.187.41a4.545 4.545 0 0 0-1.62 1.152 4.901 4.901 0 0 0-1.016 1.738 6.816 6.816 0 0 0-.332 2.167c0 .755.124 1.452.371 2.09a4.868 4.868 0 0 0 1.035 1.62c.443.456.976.814 1.601 1.074.638.248 1.334.371 2.09.371 1.34 0 2.44-.351 3.3-1.054.858-.703 1.379-1.725 1.561-3.066H8.155c-.09.625-.319 1.126-.683 1.504-.352.364-.86.546-1.523.546-.43 0-.794-.097-1.093-.292-.3-.196-.54-.443-.723-.742a3.758 3.758 0 0 1-.37-1.035 5.484 5.484 0 0 1 0-2.246c.077-.39.207-.742.39-1.054.195-.325.442-.586.742-.781.299-.208.67-.312 1.113-.312 1.184 0 1.867.579 2.05 1.737ZM14.466 14.488c0-.404.04-.8.117-1.191.079-.39.209-.736.39-1.035.196-.3.45-.54.762-.723.313-.195.703-.292 1.172-.292s.86.097 1.171.293c.326.182.58.423.762.722.195.3.332.644.41 1.035a6.058 6.058 0 0 1 0 2.382 3.135 3.135 0 0 1-.41 1.035c-.182.3-.436.54-.762.722-.312.182-.702.273-1.171.273-.469 0-.86-.09-1.172-.273a2.25 2.25 0 0 1-.761-.722 3.41 3.41 0 0 1-.39-1.035 6.058 6.058 0 0 1-.118-1.191Zm-2.772 0c0 .807.123 1.536.37 2.187.248.65.6 1.21 1.055 1.679a4.68 4.68 0 0 0 1.64 1.054c.638.248 1.354.371 2.148.371s1.51-.123 2.148-.37a4.646 4.646 0 0 0 1.66-1.055 4.845 4.845 0 0 0 1.054-1.68c.247-.65.37-1.38.37-2.186 0-.807-.123-1.536-.37-2.187a4.614 4.614 0 0 0-1.055-1.68 4.517 4.517 0 0 0-1.66-1.073c-.637-.26-1.353-.39-2.147-.39-.794 0-1.51.13-2.148.39a4.614 4.614 0 0 0-2.694 2.753c-.248.65-.371 1.38-.371 2.187ZM23.552 9.43v10.095h2.773v-5.291c0-1.028.169-1.764.507-2.206.339-.456.885-.684 1.64-.684.664 0 1.126.209 1.387.625.26.404.39 1.022.39 1.855v5.701h2.773v-6.209c0-.625-.059-1.19-.176-1.698-.104-.521-.293-.957-.566-1.309-.273-.364-.651-.644-1.133-.84-.468-.207-1.073-.312-1.816-.312-.585 0-1.158.137-1.718.41-.56.26-1.015.684-1.366 1.27h-.06V9.43h-2.635ZM38.25 9.43V6.405h-2.772v3.027h-1.68v1.855h1.68v5.955c0 .508.084.918.253 1.23.17.312.398.553.684.723.3.169.638.28 1.015.331.39.066.8.098 1.23.098.274 0 .554-.007.84-.02.286-.013.547-.039.78-.078v-2.147c-.13.026-.266.045-.41.058-.142.013-.292.02-.448.02-.469 0-.781-.078-.938-.235-.156-.156-.234-.468-.234-.937v-4.998h2.03V9.43h-2.03ZM41.21 9.43v10.095h2.772v-4.549c0-.456.046-.879.137-1.27.091-.39.24-.728.449-1.014.221-.3.508-.534.859-.703.352-.17.781-.254 1.289-.254.169 0 .345.013.527.039.182.013.338.032.468.058V9.255a2.162 2.162 0 0 0-.605-.098c-.351 0-.69.052-1.015.157a3.534 3.534 0 0 0-.918.449c-.286.182-.54.41-.761.683-.222.26-.397.547-.527.86h-.04V9.43H41.21ZM51.259 7.869V5.584h-2.773V7.87h2.773ZM48.486 9.43v10.094h2.773V9.431h-2.773ZM60.452 14.488c0 .416-.046.82-.137 1.21-.091.39-.234.736-.43 1.035-.195.3-.442.54-.742.723-.286.169-.638.253-1.054.253-.404 0-.755-.084-1.054-.253a2.312 2.312 0 0 1-.742-.723 3.215 3.215 0 0 1-.43-1.035 5.31 5.31 0 0 1-.137-1.21c0-.43.046-.84.137-1.23.091-.39.234-.736.43-1.035.195-.3.442-.534.742-.703.299-.182.65-.273 1.054-.273.416 0 .768.09 1.054.273.3.17.547.404.742.703.196.3.339.644.43 1.035.091.39.137.8.137 1.23Zm-7.4-8.904v13.941h2.635v-1.288h.04c.299.56.741.957 1.327 1.19.586.235 1.25.352 1.992.352.507 0 1.008-.104 1.503-.312a3.756 3.756 0 0 0 1.328-.957c.403-.43.729-.976.976-1.64.247-.677.371-1.478.371-2.402 0-.924-.123-1.718-.37-2.382-.248-.677-.574-1.23-.977-1.66a3.757 3.757 0 0 0-1.328-.956 3.843 3.843 0 0 0-1.503-.313c-.625 0-1.23.124-1.816.371a2.907 2.907 0 0 0-1.367 1.133h-.039V5.584h-2.773ZM74.067 19.525V9.431h-2.772v5.291c0 1.029-.17 1.77-.508 2.226-.339.443-.885.664-1.64.664-.664 0-1.126-.202-1.387-.605-.26-.417-.39-1.042-.39-1.875V9.431h-2.773v6.209c0 .625.052 1.197.157 1.718.117.508.312.944.585 1.308.274.352.645.625 1.113.82.482.196 1.094.293 1.836.293.585 0 1.158-.13 1.718-.39s1.015-.684 1.367-1.27h.058v1.406h2.636ZM79.296 9.43V6.405h-2.773v3.027h-1.68v1.855h1.68v5.955c0 .508.085.918.254 1.23.169.312.397.553.683.723.3.169.638.28 1.016.331.39.066.8.098 1.23.098.273 0 .553-.007.84-.02.286-.013.546-.039.78-.078v-2.147c-.13.026-.267.045-.41.058a4.97 4.97 0 0 1-.449.02c-.468 0-.78-.078-.937-.235-.156-.156-.234-.468-.234-.937v-4.998h2.03V9.43h-2.03ZM89.05 13.394h-4.51c.012-.195.051-.416.116-.663.079-.248.202-.482.371-.703.183-.222.417-.404.703-.547.3-.156.67-.234 1.113-.234.677 0 1.178.182 1.504.546.338.365.573.899.703 1.601Zm-4.51 1.758h7.282a7.127 7.127 0 0 0-.195-2.246 5.398 5.398 0 0 0-.898-1.913 4.304 4.304 0 0 0-1.562-1.328c-.638-.338-1.386-.508-2.246-.508-.768 0-1.47.137-2.108.41a4.919 4.919 0 0 0-1.62 1.133 4.847 4.847 0 0 0-1.055 1.68 5.888 5.888 0 0 0-.371 2.108 6.3 6.3 0 0 0 .351 2.148 5 5 0 0 0 1.035 1.679c.443.468.983.833 1.62 1.093.639.248 1.354.371 2.148.371 1.146 0 2.122-.26 2.93-.78.806-.521 1.405-1.387 1.796-2.598h-2.441c-.091.313-.338.612-.742.898-.404.274-.885.41-1.445.41-.78 0-1.38-.201-1.796-.605-.417-.403-.645-1.054-.684-1.952ZM105.286 14.449c0 .416-.039.82-.117 1.21-.078.39-.209.742-.391 1.055-.182.3-.429.54-.742.722-.299.182-.677.273-1.132.273-.43 0-.801-.09-1.113-.273a2.757 2.757 0 0 1-.762-.742 3.456 3.456 0 0 1-.429-1.054 5.149 5.149 0 0 1-.137-1.172c0-.416.039-.813.117-1.19.091-.391.228-.736.41-1.036.196-.299.449-.54.762-.722.312-.182.696-.273 1.152-.273.455 0 .833.09 1.132.273.3.182.54.423.723.722.195.287.332.625.41 1.016.078.377.117.774.117 1.19Zm.039 3.788v1.288h2.636V5.585h-2.773v5.076h-.039a2.903 2.903 0 0 0-1.288-1.113c-.534-.26-1.1-.39-1.699-.39-.742 0-1.393.15-1.953.449-.56.286-1.028.67-1.406 1.152a5.35 5.35 0 0 0-.84 1.679 6.935 6.935 0 0 0-.272 1.952c0 .703.09 1.38.273 2.03.195.652.475 1.231.84 1.739.377.494.852.891 1.425 1.19.573.287 1.236.43 1.991.43.664 0 1.257-.117 1.777-.351.534-.248.963-.645 1.289-1.191h.039ZM116.461 13.394h-4.511c.013-.195.053-.416.118-.663.078-.248.201-.482.371-.703.182-.222.416-.404.703-.547.299-.156.67-.234 1.112-.234.677 0 1.178.182 1.504.546.338.365.573.899.703 1.601Zm-4.511 1.758h7.283a7.106 7.106 0 0 0-.195-2.246 5.387 5.387 0 0 0-.898-1.913 4.298 4.298 0 0 0-1.562-1.328c-.638-.338-1.386-.508-2.245-.508a5.3 5.3 0 0 0-2.109.41 4.922 4.922 0 0 0-1.621 1.133 4.849 4.849 0 0 0-1.054 1.68 5.895 5.895 0 0 0-.371 2.108c0 .78.117 1.497.351 2.148a5.02 5.02 0 0 0 1.035 1.679c.443.468.983.833 1.621 1.093.638.248 1.354.371 2.148.371 1.145 0 2.121-.26 2.928-.78.807-.521 1.406-1.387 1.797-2.598h-2.441c-.091.313-.338.612-.742.898-.403.274-.885.41-1.445.41-.781 0-1.38-.201-1.796-.605-.417-.403-.644-1.054-.684-1.952ZM122.635 16.245h-2.636c.026.677.176 1.243.449 1.699.287.442.645.8 1.074 1.074.443.273.944.468 1.504.585a8.352 8.352 0 0 0 3.397 0 4.149 4.149 0 0 0 1.484-.566c.43-.273.775-.631 1.035-1.074.273-.455.41-1.015.41-1.679 0-.468-.091-.859-.273-1.171a2.387 2.387 0 0 0-.723-.8 3.679 3.679 0 0 0-1.035-.528c-.377-.13-.768-.24-1.171-.332a47.897 47.897 0 0 0-1.152-.254 11.536 11.536 0 0 1-1.016-.254 2.266 2.266 0 0 1-.703-.39.76.76 0 0 1-.273-.605c0-.209.052-.371.156-.489.104-.13.228-.227.371-.293a1.61 1.61 0 0 1 .508-.117c.182-.026.351-.039.508-.039.494 0 .924.098 1.288.293.365.182.567.54.606 1.074h2.636c-.053-.625-.215-1.139-.489-1.542a3.033 3.033 0 0 0-.995-.996 4.213 4.213 0 0 0-1.387-.527 7.847 7.847 0 0 0-1.581-.157c-.547 0-1.081.052-1.601.157-.521.09-.99.26-1.406.507-.417.235-.755.56-1.016.976-.247.417-.37.95-.37 1.602 0 .442.091.82.273 1.132.182.3.423.553.722.762.3.195.638.358 1.016.488.39.117.787.221 1.191.312.989.208 1.757.417 2.304.625.559.208.839.52.839.937 0 .247-.058.456-.175.625a1.459 1.459 0 0 1-.45.39 2.38 2.38 0 0 1-.585.215 3.295 3.295 0 0 1-1.406-.039 2.194 2.194 0 0 1-.664-.293 1.888 1.888 0 0 1-.488-.527 1.649 1.649 0 0 1-.176-.78ZM133.435 7.869V5.584h-2.773V7.87h2.773Zm-2.773 1.562v10.094h2.773V9.431h-2.773ZM139.933 17.143c-.429 0-.787-.09-1.074-.273a2.277 2.277 0 0 1-.703-.703 3.256 3.256 0 0 1-.371-.957 6.216 6.216 0 0 1-.097-1.093c0-.378.039-.736.117-1.074.091-.351.228-.657.41-.918.195-.273.429-.488.703-.644.286-.156.625-.234 1.015-.234.456 0 .833.084 1.133.254.299.169.54.397.722.683.182.286.312.618.391.996.078.364.117.755.117 1.171 0 .365-.052.716-.156 1.054a2.655 2.655 0 0 1-.43.88c-.195.26-.443.468-.742.624a2.203 2.203 0 0 1-1.035.234Zm4.999 1.738v-9.45h-2.636v1.347h-.039c-.339-.586-.762-1.002-1.269-1.25-.495-.247-1.074-.37-1.738-.37-.703 0-1.328.136-1.875.41a4 4 0 0 0-1.347 1.112c-.364.456-.644.99-.84 1.601a6.41 6.41 0 0 0-.273 1.875c0 .69.078 1.347.234 1.972.17.612.43 1.152.781 1.62.352.456.801.82 1.348 1.094.546.26 1.197.39 1.952.39.612 0 1.191-.123 1.738-.37.56-.26.989-.658 1.289-1.191h.039v1.327c.013.716-.163 1.308-.527 1.777-.352.469-.918.703-1.699.703-.495 0-.931-.104-1.308-.313-.378-.195-.632-.553-.762-1.073h-2.753c.039.572.195 1.06.469 1.464a3.55 3.55 0 0 0 1.054 1.015c.43.26.898.45 1.406.567.521.13 1.028.195 1.523.195 1.158 0 2.083-.156 2.772-.469.69-.312 1.218-.696 1.582-1.152a3.26 3.26 0 0 0 .703-1.445c.117-.52.176-.982.176-1.386ZM146.773 9.43v10.095h2.773v-5.291c0-1.028.169-1.764.508-2.206.338-.456.885-.684 1.64-.684.664 0 1.126.209 1.386.625.26.404.391 1.022.391 1.855v5.701h2.772v-6.209a7.58 7.58 0 0 0-.175-1.698c-.105-.521-.293-.957-.567-1.309-.273-.364-.651-.644-1.132-.84-.469-.207-1.074-.312-1.816-.312-.586 0-1.159.137-1.718.41-.56.26-1.016.684-1.367 1.27h-.059V9.43h-2.636Z"
      />
      <path
        fill="#E11D48"
        d="M93.232 16.518v3.007h1.406c.013.209-.013.41-.078.606a1.58 1.58 0 0 1-.293.546c-.13.17-.286.313-.468.43-.17.117-.352.195-.547.234v1.406a3.973 3.973 0 0 0 1.172-.37c.377-.17.702-.391.976-.665.273-.273.488-.599.644-.976a2.84 2.84 0 0 0 .254-1.21v-3.008h-3.066Z"
      />
    </svg>
  )
}

export default Logo
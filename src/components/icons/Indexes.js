import * as React from 'react'
import theme from 'theme'

function Indexes({ width = 21, height = 23, ...props }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.43 5.01l-3.84-3.879A.627.627 0 0015.19.97H5.714a1.07 1.07 0 00-1.055 1.07v16.063c0 .586.477 1.07 1.055 1.07h13.06a1.07 1.07 0 001.055-1.07V6.02c0-.384-.14-.728-.398-1.01zm-.636.506h-3.185a.265.265 0 01-.258-.263V2.02l3.443 3.496zm-.02 12.93H5.714a.36.36 0 01-.359-.363V2.04a.36.36 0 01.359-.364h8.96v3.596c0 .526.418.95.935.95h3.523v11.88c0 .182-.16.343-.358.343zm.657-13.435l-3.842-3.88a.627.627 0 00-.398-.161H5.714a1.07 1.07 0 00-1.055 1.07v16.063c0 .586.477 1.07 1.055 1.07h13.06a1.07 1.07 0 001.055-1.07V6.02c0-.384-.14-.728-.398-1.01zm-.637.505h-3.185a.265.265 0 01-.258-.263V2.02l3.443 3.496zm-.02 12.93H5.714a.36.36 0 01-.359-.363V2.04a.36.36 0 01.359-.364h8.96v3.596c0 .526.418.95.935.95h3.523v11.88c0 .182-.16.343-.358.343z"
        fill={theme.colors.main.default}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.28 2.04c0-.79.642-1.45 1.434-1.45h9.478c.25 0 .473.108.643.252l.012.011 1.93 1.948 1.929 1.948.005.006c.32.35.497.783.497 1.266v12.082c0 .79-.642 1.45-1.434 1.45H5.714a1.45 1.45 0 01-1.434-1.45V2.041zm1.455.016v16.011h13.018V6.602H15.61a1.32 1.32 0 01-1.315-1.328V2.056h-8.56zm9.995.89v2.19h2.158l-2.158-2.19z"
        fill={theme.colors.main.default}
      />
      <path
        d="M.832 5.489c0-.79.642-1.45 1.434-1.45h3.307v1.465H2.287v16.011h13.018v-2.824h1.456v2.86c0 .79-.643 1.45-1.435 1.45H2.266a1.45 1.45 0 01-1.434-1.45V5.489z"
        fill={theme.colors.main.default}
      />
    </svg>
  )
}

export default Indexes
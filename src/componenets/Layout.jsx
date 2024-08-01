
export function Layout({children, className=""}) {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light  dark:bg-dark px-32 py-2 xl:px-24 xl:py-8 lg:px-24 md:px-12 md:py-4 sm:p-16 xs:py-18 xs:px-8  ${className} `}>
      {children}
    </div>
  )
}

// xl:p-24 lg:p-16 md:p-12 sm:p-8 pt-0
export default Layout
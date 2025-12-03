export default function TwSizeIndicator() {
  if (process.env.NODE_ENV !== 'development') return null
  return (
    <div className="fixed bottom-0 left-0 z-50 flex items-center justify-center bg-gray-200 p-2 text-xs  uppercase text-black sm:bg-red-200 md:bg-yellow-200 lg:bg-green-200 xl:bg-blue-200 2xl:bg-pink-200">
      <span className="block sm:hidden">all</span>
      <span className="hidden sm:block md:hidden">sm</span>
      <span className="hidden md:block lg:hidden">md</span>
      <span className="hidden lg:block xl:hidden">lg</span>
      <span className="hidden xl:block 2xl:hidden">xl</span>
      <span className="hidden 2xl:block">2xl</span>
    </div>
  )
}

export default function Divider() {
    return (
      <div className="relative mt-4">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-600" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-6 text-base font-semibold leading-6 text-black"></span>
        </div>
      </div>
    )
  }
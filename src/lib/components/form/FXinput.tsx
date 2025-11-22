interface FXinputProps {
  label?: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
  error?: string
  register?: any
}

export const FXinput = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  error,
  register,
}: FXinputProps) => (
  <div className='flex flex-col gap-1'>
    {label && (
      <label className='text-sm text-gray-300'>
        {label} {required && <span className='text-red-500'>*</span>}
      </label>
    )}
    <input
      type={type}
      placeholder={placeholder}
      {...(register ? register(name) : {})}
      className={`p-2 rounded-lg border ${
        error ? 'border-red-500' : 'border-gray-400'
      } focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent text-white`}
      required={required}
    />
    {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
  </div>
)

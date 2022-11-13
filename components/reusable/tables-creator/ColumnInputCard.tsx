// Lib
import { toColumn, toTitleCase } from 'lib/utils/HelpersUtils'

// Icon
import BarArrowDownIcon from '../../../asset/svg/bar-arrow-down.svg'

type Props = {
  id: number,
  colName: string,
  isRequired: boolean,
  dataType: string,
  minAndMax?: string[],
  update: Function
}

const ColumnInputCard: React.FC<Props> = ({ id, colName, isRequired, dataType, minAndMax, update }) => {

  return (
    <div className='md:col-span-6 col-span-12 p-4 bg-black'>

      <h3 className='font-bold text-lg'>Column Name</h3>
      <input
        type='text'
        className='p-1.5 w-full font-medium bg-transparent outline-none border-b-2 border-white/70 focus:border-white'
        value={colName}
        onChange={e => update(id, { colName: toColumn(e.target.value) })}
      />
      <p className='text-yellow-500 mt-1.5 text-xs'>Use <a onClick={() => window.location.href = 'https://betterprogramming.pub/string-case-styles-camel-pascal-snake-and-kebab-case-981407998841'} className='font-bold hover:text-blue-500 hover:underline'>snake_case</a> Only!</p>

      <p className='text-sm font-medium text-white mt-6'>
        Validation Rules &rarr;
      </p>

      <div className='mt-3 space-y-2'>

        <a onClick={() => update(id, { isRequired: !isRequired })} className={`font-bold border-2 ${isRequired ? 'border-green-600 hover:bg-green-800 bg-green-700' : 'border-red-600 hover:bg-red-800 bg-red-700'} py-2 inline-block w-full text-sm px-4 text-white`}>
          Required: {toTitleCase(isRequired.toString())}
        </a>

        <a className='group flex items-center justify-between p-3 border-2 border-dashed text-sky-500'>

          <p className='group-hover:text-sky-500/60'>Data Type: <span className='font-bold'>{dataType}</span></p>
          <BarArrowDownIcon className='group-hover:fill-sky-500/60 w-6 aspect-square' />

        </a>

        <div className='flex items-center'>

          <div className='w-6/12 flex items-end'>

            <p className='pb-1.5 pr-2 border-b-2 border-yellow-500'>Min</p>
            <input
              type='number'
              className='p-1.5 w-full font-medium bg-transparent outline-none border-b-2 border-white/70 focus:border-white'
              value={minAndMax ? minAndMax[0] : ''}
              onChange={e => update(id, { minAndMax: [e.target.value, minAndMax ? minAndMax[1] : ''] })}
            />

          </div>

          <div className='w-6/12 flex items-end'>

            <p className='pb-1.5 pr-2 border-b-2 border-green-500'>Max</p>
            <input
              type='number'
              className='p-1.5 w-full font-medium bg-transparent outline-none border-b-2 border-white/70 focus:border-white'
              value={minAndMax ? minAndMax[1] : ''}
              onChange={e => update(id, { minAndMax: [minAndMax ? minAndMax[0] : '', e.target.value] })}
            />

          </div>

        </div>

      </div>

    </div>
  )
}

export default ColumnInputCard

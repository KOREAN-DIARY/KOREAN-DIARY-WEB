import { ChartType } from 'hooks/query/useChartQuery'
import { createContext, useContext, useState } from 'react'

export const initialChart: ChartType[] = [
  {
    id: '총점',
    color: 'hsl(102, 70%, 50%)',
    data: [
      {
        x: '0',
        y: 0,
      },
      {
        x: '',
        y: 0,
      },
      {
        x: '',
        y: 0,
      },
      {
        x: '',
        y: 0,
      },
      {
        x: '',
        y: 0,
      },
      {
        x: '',
        y: 0,
      },
      {
        x: '',
        y: 0,
      },
    ],
  },
  {
    id: '쓰기',
    color: 'hsl(225, 70%, 50%)',
    data: [
      {
        x: '0',
        y: 0,
      },
      {
        x: '',
        y: 0,
      },
      {
        x: '',
        y: 0,
      },
      {
        x: '',
        y: 0,
      },
      {
        x: '',
        y: 0,
      },
      {
        x: '',
        y: 0,
      },
      {
        x: '',
        y: 0,
      },
    ],
  },
  {
    id: '말하기',
    color: 'hsl(152, 70%, 50%)',
    data: [
      {
        x: '0',
        y: 0,
      },
      {
        x: '',
        y: 0,
      },
      {
        x: '',
        y: 0,
      },
      {
        x: '',
        y: 0,
      },
      {
        x: '',
        y: 0,
      },
      {
        x: '',
        y: 0,
      },
      {
        x: '',
        y: 0,
      },
    ],
  },
]

const initialState = {
  chart: initialChart,
  setChart: (_: ChartType[]) => {
    return
  },
}

export const ChartContext = createContext(initialState)

const ChartProvider = ({ children }: { children: JSX.Element }) => {
  const [chart, setChart] = useState<ChartType[]>(initialChart)
  return (
    <ChartContext.Provider value={{ chart, setChart }}>
      {children}
    </ChartContext.Provider>
  )
}

export const useDiaryContext = () => {
  const context = useContext(ChartContext)
  if (context === undefined) {
    throw new Error('useChartContext must be used within a ChartProvider')
  }
  return context
}

export default ChartProvider

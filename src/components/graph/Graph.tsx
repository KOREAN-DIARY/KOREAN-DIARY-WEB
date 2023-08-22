import { ResponsiveLine } from '@nivo/line'
import * as S from './Graph.style'

type DataType = {
  x: string
  y: number
}

interface DataProps {
  id: string
  color: string
  data: DataType[]
}

const data = [
  {
    id: 'speaking',
    color: 'hsl(353, 70%, 50%)',
    data: [
      {
        x: '3/3',
        y: 70,
      },
      {
        x: '3/4',
        y: 60,
      },
      {
        x: '3/7',
        y: 80,
      },
      {
        x: '3/9',
        y: 68,
      },
      {
        x: '3/10',
        y: 70,
      },
      {
        x: '3/11',
        y: 72,
      },
      {
        x: '3/13',
        y: 90,
      },
    ],
  },
  {
    id: 'writing',
    color: 'hsl(270, 70%, 50%)',
    data: [
      {
        x: '3/3',
        y: 80,
      },
      {
        x: '3/4',
        y: 80,
      },
      {
        x: '3/7',
        y: 84,
      },
      {
        x: '3/9',
        y: 76,
      },
      {
        x: '3/10',
        y: 90,
      },
      {
        x: '3/11',
        y: 96,
      },
      {
        x: '3/13',
        y: 94,
      },
    ],
  },
  {
    id: 'total',
    color: 'hsl(107, 70%, 50%)',
    data: [
      {
        x: '3/3',
        y: 75,
      },
      {
        x: '3/4',
        y: 70,
      },
      {
        x: '3/7',
        y: 82,
      },
      {
        x: '3/9',
        y: 74,
      },
      {
        x: '3/10',
        y: 80,
      },
      {
        x: '3/11',
        y: 84,
      },
      {
        x: '3/13',
        y: 92,
      },
    ],
  },
]

const Graph = () => {
  return (
    <S.GraphWrapper>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 0,
          max: 100,
          stacked: false,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '날짜',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '점수',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            toggleSerie: true,
            justify: false,
            translateX: 0,
            translateY: 80,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </S.GraphWrapper>
  )
}

export default Graph

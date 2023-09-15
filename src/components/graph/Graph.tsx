import { ResponsiveLine } from '@nivo/line'
import * as S from './Graph.style'
import { useChartQuery } from 'hooks/query/useChartQuery'
import ChartProvider, { initialChart } from 'hooks/context/useChartContext'

const Graph = () => {
  const { data, isSuccess } = useChartQuery({
    onSuccess: () => {
      return data
    },
  })

  return (
    <ChartProvider>
      <S.GraphWrapper>
        <ResponsiveLine
          data={data === undefined ? initialChart : data}
          colors={{ scheme: 'pastel1' }}
          margin={{ top: 50, right: 30, bottom: 50, left: 30 }}
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
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: -40,
            legendPosition: 'middle',
          }}
          pointSize={10}
          // pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          // pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              toggleSerie: true,
              justify: false,
              translateX: 0,
              translateY: 50,
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
    </ChartProvider>
  )
}

export default Graph

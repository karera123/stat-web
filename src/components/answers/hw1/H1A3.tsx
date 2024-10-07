import { Chart } from "chart.js";
import { isNumber } from "chart.js/helpers";
import { useEffect, useRef, useState } from "react"

type Data = Record<'labels' | 'datasets', any>;

const H1A3 = () => {
  const chartSingleRef = useRef<HTMLCanvasElement | null>(null);
  const chartTotalRef = useRef<HTMLCanvasElement | null>(null);

  const serverInputRef = useRef<HTMLInputElement | null>(null);
  const attackerInputRef = useRef<HTMLInputElement | null>(null);
  const probabilityInputRef = useRef<HTMLInputElement | null>(null);

  const [dataSingle, setDataSingle] = useState<Data | null>(null);
  const [dataTotal, setDataTotal] = useState<Data | null>(null);

  const generateDataSingleAttacker = (serversCount: number, attackersCount: number, probability: number) => {
    const newData: Data = {
      labels: [],
      datasets: []
    };

    if (isNumber(serversCount) && isNumber(attackersCount) && isNumber(probability)) {
      for (let i = 1; i <= serversCount; i++) {
        newData.labels.push('Server ' + i);
      }

      const attackersResults: number[][] = [];

      for (let i = 0; i < attackersCount; i++) {
        attackersResults.push([]);
        for (let j = 0; j < serversCount; j++) {
          attackersResults[i].push(Math.random() <= probability ? 1 : 0);
        }
      }

      const getRgbValue = () => {
        return Math.random() * 255 + 1;
      }

      for (let i = 0; i < attackersCount; i++) {
        let counter = 0;

        const _data = attackersResults[i]?.map(i => {
          counter += i;
          return counter;
        });

        newData.datasets.push(
          {
            label: 'Attacker ' + (i + 1),
            data: _data,
            fill: false,
            borderColor: 'rgb(' + getRgbValue() + ', ' + getRgbValue() + ', ' + getRgbValue() + ')'
          }
        );
      }
    }

    setDataSingle(newData);
  }

  const generateDataAllAttacker = (serversCount: number, attackersCount: number, probability: number) => {
    const newData: Data = {
      labels: [],
      datasets: []
    };

    if (isNumber(serversCount) && isNumber(attackersCount) && isNumber(probability)) {
      for (let i = 1; i <= serversCount; i++) {
        newData.labels.push('Server ' + i);
      }

      const attackersResults: number[][] = [];

      for (let i = 0; i < attackersCount; i++) {
        attackersResults.push([]);
        for (let j = 0; j < serversCount; j++) {
          attackersResults[i].push(Math.random() <= probability ? 1 : 0);
        }
      }

      const getRgbValue = () => {
        return Math.random() * 255 + 1;
      }

      const _dataAll: number[] = [];
      for (let i = 0; i < serversCount; i++) {
        _dataAll.push(0);
      }

      for (let col = 0; col < serversCount; col++) {
        for (let row = 0; row < attackersCount; row++) {
          _dataAll[col] += attackersResults[row][col];
        }
      }

      newData.datasets.push(
        {
          label: 'Breaches',
          data: _dataAll,
          fill: false,
          borderColor: 'rgb(' + getRgbValue() + ', ' + getRgbValue() + ', ' + getRgbValue() + ')',
          tension: 0.25
        }
      );
    }

    setDataTotal(newData);
  }

  const getData = () => {
    const serversCount = Number(serverInputRef.current?.value);
    const attackersCount = Number(attackerInputRef.current?.value);
    const probability = Number(probabilityInputRef.current?.value);

    generateDataSingleAttacker(serversCount, attackersCount, probability);
    generateDataAllAttacker(serversCount, attackersCount, probability);
  }

  useEffect(() => {
    let chartSingle: Chart | null = null;
    let chartTotal: Chart | null = null;

    if (chartSingleRef.current && dataSingle) {
      chartSingle = new Chart(chartSingleRef.current, {
        type: 'line',
        data: dataSingle,
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Servers'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Number of breaches'
              }
            }
          }
        }
      });
    }

    if (chartTotalRef.current && dataTotal) {
      chartTotal = new Chart(chartTotalRef.current, {
        type: 'line',
        data: dataTotal,
        options: {
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Servers'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Number of breaches'
              }
            }
          }
        }
      });
    }

    return () => {
      chartSingle?.destroy();
      chartTotal?.destroy();
    }
  }, [dataSingle, dataTotal]);

  return (
    <div className="py-9">
      <section>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor='server'>Servers</label>
              </td>
              <td className="pl-4">
                <input
                  ref={serverInputRef}
                  id='server'
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type='number'
                  min={0}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='attacker'>Attackers</label>
              </td>
              <td className="pl-4">
                <input
                  ref={attackerInputRef}
                  id='attacker'
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type='number'
                  min={0}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='probability'>Probability</label>
              </td>
              <td className="pl-4">
                <input
                  ref={probabilityInputRef}
                  id='probability'
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type='number'
                  min={0}
                  max={1}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button
                  onClick={getData}
                  className="rounded-full bg-slate-200 px-4 py-2"
                >
                  Draw
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <div className="w-[800] mx-auto mt-5">
        <div className="mt-12">
          <canvas ref={chartSingleRef}></canvas>
        </div>
        <div className="mt-20">
          <canvas ref={chartTotalRef}></canvas>
        </div>
      </div>
    </div>
  )
}

export default H1A3
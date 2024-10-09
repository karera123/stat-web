import { Chart } from "chart.js";
import { isNumber } from "chart.js/helpers";
import { useEffect, useRef, useState } from "react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import CSharpEx3Img from '../../../assets/images/hw1-c-sharp.png';

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
        newData.labels.push(i);
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
            label: 'Successful attack by attacker #' + (i + 1),
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
        newData.labels.push(i);
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
          label: 'Total number of successful attack',
          data: _dataAll,
          fill: false,
          borderColor: 'rgb(' + getRgbValue() + ', ' + getRgbValue() + ', ' + getRgbValue() + ')',
          tension: 0.25,
          backgroundColor: 'rgba(54, 162, 235, 0.7)',
        }
      );
    }

    setDataTotal(newData);
  }

  const getData = () => {
    const _serverCount = Number(serverInputRef.current?.value);
    const _attackerCount = Number(attackerInputRef.current?.value);
    const _probability = Number(probabilityInputRef.current?.value);

    generateDataSingleAttacker(_serverCount, _attackerCount, _probability);
    generateDataAllAttacker(_serverCount, _attackerCount, _probability);
  }

  useEffect(() => {
    let chartSingle: Chart | null = null;
    let chartTotal: Chart | null = null;

    if (chartSingleRef.current && dataSingle) {
      chartSingle = new Chart(chartSingleRef.current, {
        type: 'line',
        data: dataSingle,
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
                text: 'Number of breached servers'
              }
            }
          }
        }
      });
    }

    if (chartTotalRef.current && dataTotal) {
      chartTotal = new Chart(chartTotalRef.current, {
        plugins: [ChartDataLabels],
        type: 'bar',
        data: dataTotal,
        options: {
          plugins: {
            legend: {
              display: false
            },
            datalabels: {
              display: true,
              align: 'center',
              color: 'black',
              font: {
                weight: 'bold'
              }
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
                text: 'Number of breached servers'
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
        Source code: <a href='https://github.com/karera123/stat-web/tree/main/src'>Javascript</a>
        <table className="mt-5">
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
                  Simulate
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <div id='javascript' className="w-[800] mx-auto mt-5 p-12 flex flex-row">
        <div className="flex-1 border">
          <canvas className="w-[500px]" ref={chartSingleRef}></canvas>
        </div>
        <div className="flex-1 border">
          <canvas className="w-[500px]" ref={chartTotalRef}></canvas>
        </div>
      </div>
      <div id='cSharp'>
        Source code: <a href='https://github.com/karera123/stat-c-sharp/tree/main/Hw1'>C#</a>
        <div className="flex justify-center">
          <img alt='Exercise 3 - C#' src={CSharpEx3Img} />
        </div>
      </div>
    </div>
  )
}

export default H1A3
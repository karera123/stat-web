import H1A1 from "../components/answers/hw1/H1A1"
import H1A2 from "../components/answers/hw1/H1A2"
import Question from "../components/Question"

const Hw1 = () => {

  const questions = [
    'Basic notions in Statistics: Population, Statistical Units, Distribution',
    'Notion of average. Computational problems with floating point rapresentation (errors, catastrophical cancellation) and numerical solution (Knuth)'
  ]

  return (
    <div>
      <div id="question1">
        <Question text={questions[0]} />
        <H1A1 />
      </div>
      <div id="question1" className="mt-8 border-t-2 pt-4">
        <Question text={questions[1]} />
        <H1A2 />
      </div>
    </div>
  )
}

export default Hw1
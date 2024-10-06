interface QuestionProps {
  text: string
}

const Question = (props: QuestionProps) => {
  const { text } = props;

  return (
    <div className="pb-3">
      <h1 className="text-2xl font-semibold">
        {text}
      </h1>
    </div>
  )
}

export default Question
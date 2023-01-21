interface ProgressBarProps {
  progress:number
}

export function ProgressBar(props: ProgressBarProps){
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div 
      role="progressbar"
      arial-label="Progresso de hábitos concluídos nesse dia"
      arial-valuenow={props.progress}
      className="h-3 rounded-xl bg-violet-600 w-3/4 "
      style={{width: `${props.progress}%`}}
      />
      
    </div>

    )
}
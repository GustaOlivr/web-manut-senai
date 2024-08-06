interface Props {
    params: {moto_id: string};
  }
  
  export default function ProfileDetails({params}: Props) {
    return (
      <>
        <h1 className="text-xl font-bold">
          Moto: {params.moto_id} 
        </h1>
      </>
    );
  }
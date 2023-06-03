import { useState } from "react"

function App() {

  const [page, setPage] = useState<number>(0)
  const [step, setStep] = useState<number>(0)

  return (
    <>
    { page === 0 ?
      <>
      {
        <>
            <h1 className="text-5xl text-center my-4">Interface Enseignant</h1><div className="flex-col space-y-6 text-3xl text-white mt-32 w-fit text-center h-full mx-auto">
              <h1 onClick={() => { setPage(1) } } className="cursor-pointer p-3 bg-slate-700">Demande Soutenance</h1>
              <h1 onClick={() => { setPage(2) } } className="cursor-pointer p-3 bg-slate-700">Consultation</h1>
            </div>
        </>

      }

      </>
      :
      page === 1 ?
      
      <>
      {
        step === 0 ?
        <>
            <h1 className="text-3xl text-center">Demande Soutenance</h1>
            <div className="text-2xl space-y-2 flex-col text-center w-fit mx-auto">
                <h1 className="cursor-pointer mt-4 mb-10" onClick={() => { setPage(0) } }>Retourner</h1>
                <label htmlFor="iddoc-select">Choisir Doctorant : </label>
                <select name="iddoc" id="iddoc-select">
                  <option value="">Choisir l'ID du doctoratnt</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <div className="flex">
                  <h1>Titre :</h1>
                  <h1>  kech titre</h1>
                </div>

                <div>
                  <label htmlFor="iddoc-select">President : </label>
                  <select name="iddoc" id="iddoc-select">
                    <option value="">Choisir l'ID du president</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="iddoc-select">Directeur de these : </label>
                  <select name="iddoc" id="iddoc-select">
                    <option value="">Choisir l'ID du directeur</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="iddoc-select">CO Directeur : </label>
                  <select name="iddoc" id="iddoc-select">
                    <option value="">Choisir l'ID du CO directeur</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="iddoc-select">Examinateur 1 : </label>
                  <select name="iddoc" id="iddoc-select">
                    <option value="">Choisir l'ID du Examinateur</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="iddoc-select">Examinateur 2 : </label>
                  <select name="iddoc" id="iddoc-select">
                    <option value="">Choisir l'ID du Examinateur</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="iddoc-select">Examinateur 3 : </label>
                  <select name="iddoc" id="iddoc-select">
                    <option value="">Choisir l'ID du Examinateur</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="">Membre invité : </label>
                  <input type="text"/>
                </div>
                <h1 className="cursor-pointer text-white bg-slate-700 p-3" onClick={() => { setStep(1) } }>Etape 2</h1>

              </div>
              </>
            :
            step === 1 ?
            <>
              <h1 className="text-center mb-2 text-4xl mt-4">Publication</h1>
              <div className="w-fit space-y-2 text-center flex-col mx-auto">
              <h1 className="cursor-pointer text-3xl mt-4 mb-10" onClick={() => { setStep(0) } }>Retourner</h1>

                <div>
                  <label htmlFor="revu-select">Revu</label>
                  <select name="revu" id="revu-select">
                    <option value="">Choisir revu</option>
                    <option value="test">Test</option>
                    <option value="test">Test</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="titre">Titre Publication :</label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor="url">URL :</label>
                  <input type="text" />
                </div>
              </div>
              
            </>
            :
            ""
        }

      </>
      :
      page === 2 ?
      <>
        <div className="text-3xl text-center">
          <h1 className="cursor-pointer mt-4 mb-32" onClick={()=>{setPage(0)}}>Retourner</h1>
          <h1>Consultation</h1>
        </div>
      </>
      :""
    }
    </>
  )
}

export default App

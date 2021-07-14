import { useState } from 'react';
import Box from '../src/components/Box';
import MainGrid from '../src/components/MainGrid'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'

function ProfileSideBar (props) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${props.githubUser}.png`}/>
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}  
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {

  const githubUser = "AlessandroSampaio";
  const [comunidades, setComunidades] = useState([]);
  const pessoasFavoritas = [
    'Diomar159481',
    'omariosouto'
  ]
  return (
    <>
    <AlurakutMenu githubUser={githubUser}/>
    <MainGrid>
      <div className="profileArea" style={{ gridArea: "profileArea"}}>
        <ProfileSideBar githubUser={githubUser} />
      </div>
      <div className="welcomeArea" style={{ gridArea: "welcomeArea"}}>
        <Box>
          <h1 className="title">
            Bem Vindo(a)
          </h1>
          <OrkutNostalgicIconSet />
        </Box>
        
        <Box>
          <h2 className="subTitle">O que você deseja fazer?</h2>
          <form onSubmit={(e) => {
            e.preventDefault();   
            const dadosDoForm = new FormData(e.target);
            
            const comunidade = {
              id: new Date().toISOString(),
              titulo: dadosDoForm.get('title'),
              image: dadosDoForm.get('image')
            }
            setComunidades((prev) => [...prev, comunidade]);
          }}>
          <div>
            <input 
              placeholder="Qual vai ser o nome da sua comunidade?"
              name="title"
              aria-label="Qual vai ser o nome da sua comunidade?" type="text" 
            />
          </div>
          <div>
            <input 
              placeholder="Coloque uma url para usarmos de capa"
              name="image"
              aria-label="Coloque uma url para usarmos de capa" type="text" 
            />
          </div>
          <button>
            Criar comunidade
          </button>
          </form>
        </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea"}}>
        <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>

            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.titulo}`}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.titulo}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
        </ProfileRelationsBoxWrapper>
        <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li  key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
    </>
  )
}

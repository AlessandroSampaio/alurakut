import Box from '../src/components/Box';
import MainGrid from '../src/components/MainGrid'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'

function ProfileSideBar (props) {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`}/>
    </Box>
  );
}

export default function Home() {

  const githubUser = "AlessandroSampaio";

  const pessoasFavoritas = [
    'Diomar159481',
    'omariosouto'
  ]
  return (
    <>
    <AlurakutMenu />
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
      </div>
      <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea"}}>
        <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
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

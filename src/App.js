import React, { Component } from 'react'
import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Home from './pages/Home'
import Methode from './pages/Methode'
import Training from './pages/Training';

export default class App extends Component {
  render() {
    const myLocalDB=[
      {
        id:1,
        title:"LE PROGRAMME AU BOULIER",
        subtitle:"Nous enseignons à nos élèves à utiliser leur potentiel cérébral au plus haut niveau.",
        body:"Notre programme de développement cérébral a pour but l’assimilation par l’étudiant de techniques fondamentales qui rendent l’apprentissage des mathématiques (le calcul mental) plus aisée mais surtout plus passionnant. La maîtrise de ces techniques se fait grâce à l’Abacus et permet de penser en images! Très vite, l’élève développe une capacité de calcul mental accrue. Au fil du temps et de l’entraînement, l’élève prend même plaisir à traiter un sujet avec lequel il avait des difficultés. En effet, sa capacité à calculer de plus en plus vite, souvent plus vite même que la calculatrice, il reprend confiance en lui et n’hésite pas à abattre ses difficultés dans les autres matières."
      },
      {
        id:2,
        title:"NOTRE APPROCHE",
        subtitle:"Tout débute par l'abacus...",
        body:"Le cerveau se divise en deux hémisphères, le côté gauche dédié au calcul, à la logique et le côté droit dédié à l’abstraction, l’art, l’espace… Tout l’intérêt de notre méthode est qu’elle sollicite plusieurs zones du cerveau (durant les calculs) y compris l’hémisphère droit! Nous initions les élèves à l’apprentissage tactile pendant qu’ils manipulent les perles de l’abaque avec leurs mains pour effectuer des calculs mathématiques (addition, soustraction, multiplication, division). Les élèves apprennent à visualiser un «boulier mental», leur permettant d’effectuer des calculs mathématiques dans leur esprit sans l’aide d’un boulier physique."
      }
    ]

    const myLocalDB2=[
      {
        id:1,
        title:"5"
      },
      {
        id:2,
        title:"10"
      },
      {
        id:3,
        title:"without"
      }
    ]

    return (
      <Router>
        <div>
          <NavigationBar />        
        </div>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/methode' render={()=><Methode data={myLocalDB}/>} />
        <Router path="/training" render={()=><Training data={myLocalDB2}/>} />
        </Switch>
      </Router>
      
    )
  }
}


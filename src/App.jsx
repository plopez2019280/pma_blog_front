import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import PrivateRoute from './components/routes/PrivateRoute';
import Home from "./components/pages/home/Home"
import LoginScreen from "./components/pages/login/LoginScreen"
import RegisterScreen from "./components/pages/register/RegisterScreen"
import AddStory from './components/pages/story/AddStory';
import DetailStory from './components/pages/story/DetailStory';
import Header from './components/pages/home/Header';
import Footer from './components/pages/home/Footer';
import Profile from './components/pages/profile/Profile';
import EditProfile from './components/pages/profile/EditProfile';
import NotFound from './components/pages/story/NotFound';
import EditStory from './components/pages/story/EditStory';
import ReadListPage from './components/pages/read/ReadListPage';

const App = () => {

      return (
            <Router>

                  <div className="App">

                        <Routes>
                              <Route path="/" element={<LayoutsWithHeader />}>

                                    <Route path='*' element={<NotFound />} />

                                    <Route exact path='/' element={<PrivateRoute />}>
                                          <Route exact path='/' element={<Home />} />
                                    </Route>

                                    <Route exact path="/story/:slug" element={<DetailStory />} />

                                    <Route exact path='/addstory' element={<PrivateRoute />}>
                                          <Route exact path='/addstory' element={<AddStory />} />
                                    </Route>

                                    <Route exact path='/profile' element={<PrivateRoute />}>
                                          <Route exact path='/profile' element={<Profile />} />
                                    </Route>

                                    <Route exact path='/edit_profile' element={<PrivateRoute />}>
                                          <Route exact path='/edit_profile' element={<EditProfile />} />
                                    </Route>

                                    <Route exact path='/story/:slug/like' element={<PrivateRoute />}>
                                          <Route exact path='/story/:slug/like' element={<DetailStory />} />
                                    </Route>

                                    <Route exact path='/story/:slug/edit' element={<PrivateRoute />}>
                                          <Route exact path='/story/:slug/edit' element={<EditStory />} />
                                    </Route>

                                    <Route exact path='/story/:slug/delete' element={<PrivateRoute />}>
                                          <Route exact path='/story/:slug/delete' element={<DetailStory />} />
                                    </Route>
                                    <Route exact path='/story/:slug/addComment' element={<PrivateRoute />}>
                                          <Route exact path='/story/:slug/addComment' element={<DetailStory />} />
                                    </Route>

                                    <Route exact path='/readList' element={<PrivateRoute />}>
                                          <Route exact path='/readList' element={<ReadListPage />} />
                                    </Route>

                              </Route>

                              <Route exact path="/login" element={<LoginScreen />} />
                              <Route exact path="/register" element={<RegisterScreen />} />



                        </Routes>

                  </div>

            </Router>

      );

}

const LayoutsWithHeader = () => {
      return (
            <>
                  <Header />
                  <Outlet />
                  <Footer />
            </>
      );
}

export default App;

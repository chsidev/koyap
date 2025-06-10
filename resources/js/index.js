import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Flights from './pages/Flights';
import Hotels from './pages/Hotels';
import Hotel from './pages/Hotel';
import Cars from './pages/Cars';
import Cruises from './pages/Cruises';
import Documents from './pages/Documents';
import PassportRenewal from './pages/PassportRenewal';
import VisaApplication from './pages/VisaApplication';
import VisaRenewal from './pages/VisaRenewal';
import Insurance from './pages/Insurance';
import Yacht from './pages/Yacht';
import Jet from './pages/Jet';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsofUse from './pages/TermsofUse';
import Contact from './pages/Contact';
import Error from './pages/Error';
import { store } from './store';
import { Provider } from 'react-redux';
import App from './pages/App';
import Alaska from './pages/cruiseLines/Alaska';
import Antarctica from './pages/cruiseLines/Antarctica';
import Bahamas from './pages/cruiseLines/Bahamas';
import Bermuda from './pages/cruiseLines/Bermuda';
import Caribbean from './pages/cruiseLines/Caribbean';
import Christmas from './pages/cruiseLines/Christmas';
import Galapagos from './pages/cruiseLines/Galapagos';
import Hawaii from './pages/cruiseLines/Hawaii';
import Mexico from './pages/cruiseLines/Mexico';
import NewEnglandCanada from './pages/cruiseLines/NewEnglandCanada';
import Panama from './pages/cruiseLines/Panama';
import SouthAmerica from './pages/cruiseLines/SouthAmerica';
import USCanadaPacific from './pages/cruiseLines/USCanadaPacific';
import USCanadianRivers from './pages/cruiseLines/USCanadianRivers';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Flights />} />
                    <Route path="flights" element={<Flights />} />
                    <Route path="hotels" element={<Hotels />} />
                    <Route path="hotels/:hotelId" element={<Hotel />} />
                    <Route path="cars" element={<Cars />} />
                    <Route path="cruises" element={<Cruises />} />
                    <Route path="documents" element={<Documents />} />
                    <Route
                        path="passportrenewal"
                        element={<PassportRenewal />}
                    />
                    <Route
                        path="visaapplication"
                        element={<VisaApplication />}
                    />
                    <Route path="visarenewal" element={<VisaRenewal />} />
                    <Route path="insurance" element={<Insurance />} />
                    <Route path="yacht" element={<Yacht />} />
                    <Route path="jet" element={<Jet />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blogdetail" element={<BlogDetail />} />
                    <Route path="privacypolicy" element={<PrivacyPolicy />} />
                    <Route path="termsofuse" element={<TermsofUse />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="cruise-lines/alaska" element={<Alaska />} />
                    <Route
                        path="cruise-lines/antarctica"
                        element={<Antarctica />}
                    />
                    <Route path="cruise-lines/bahamas" element={<Bahamas />} />
                    <Route path="cruise-lines/bermuda" element={<Bermuda />} />
                    <Route
                        path="cruise-lines/caribbean"
                        element={<Caribbean />}
                    />
                    <Route path="cruise-lines/mexico" element={<Mexico />} />
                    <Route
                        path="cruise-lines/newenglandcanada"
                        element={<NewEnglandCanada />}
                    />
                    <Route
                        path="cruise-lines/uscanadapacific"
                        element={<USCanadaPacific />}
                    />
                    <Route
                        path="cruise-lines/uscanadianrivers"
                        element={<USCanadianRivers />}
                    />
                    <Route path="cruise-lines/panama" element={<Panama />} />
                    <Route path="cruise-lines/hawaii" element={<Hawaii />} />
                    <Route
                        path="cruise-lines/southamerica"
                        element={<SouthAmerica />}
                    />
                    <Route
                        path="cruise-lines/christmas"
                        element={<Christmas />}
                    />
                    <Route
                        path="cruise-lines/galapagos"
                        element={<Galapagos />}
                    />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

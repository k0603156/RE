import { configure } from "enzyme";
import jest from "jest";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// Unit Test Code
import { shallow, mount } from "enzyme"
import HomePage from "./Pages/home"
import { MainContainer, SearchInputField } from "./Pages/home/styles"
import { MOVIE } from "./db"
import CardsContainer from "./components/CardsContainer"
import { Pagination } from "./components/Pagination"

describe("HomePage Component", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<HomePage />)
  })

  it("should render a <MainContainer />", () => {
    expect(wrapper.find(MainContainer)).toHaveLength(1)
  })

  it("should render a <SearchInputField />", () => {
    expect(wrapper.find(SearchInputField)).toHaveLength(1)
  })

  it("should render a <CardsContainer />", () => {
    expect(wrapper.find(CardsContainer)).toHaveLength(1)
  })

  it("should render a <Pagination />", () => {
    expect(wrapper.find(Pagination)).toHaveLength(1)
  })

  it("should have an initial state of movies as an empty array", () => {
    const expectedState = []

    expect(wrapper.state().movies).toEqual(expectedState)
  })

  it("should update the movies state when useEffect is called", () => {
    const expectedState = MOVIE

    wrapper = mount(<HomePage />)

    expect(wrapper.state().movies).toEqual(expectedState)
  })

  it("should update the search state when onChange is called in SearchInputField component", () => {
    const searchValue = "Avengers"

    wrapper
      .find(SearchInputField)
      .simulate("change", { target: { value: searchValue } })

    expect(wrapper.state().search).toEqual(searchValue)
  })
})

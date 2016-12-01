import { PropTypes } from "react"
import ReactDOM from "react-dom"
import dom from "../../modules/DomHelper"

export default function ScrollerBehaviourHoc (Component) {
  class ScrollerBehaviour extends Component {

    constructor(props) {
      super(props)

      this.state = {
        ...this.state,
        scrollableAncestor: null,
        scrollTop: dom.scrollPageTop(),
      }
    }

    componentDidMount() {
      if (dom.noWindow()) {
        return
      }

      this.onScroll = this.props.throttleHandler(this.onScroll.bind(this))
      this.scrollableAncestor = this.props.scrollableAncestor ||
        dom.findScrollableAncestor(ReactDOM.findDOMNode(this))

      this.scrollableAncestor.addEventListener("scroll", this.onScroll)
      window.addEventListener("resize", this.onScroll)

      this.setState({
        scrollableAncestor: this.scrollableAncestor,
      })
    }

    componentWillUnmount() {
      if (dom.noWindow()) {
        return
      }

      // At the time of unmounting, the scrollable ancestor might no longer
      // exist. Guarding against this prevents the following error:
      //   Cannot read property 'removeEventListener' of undefined
      this.scrollableAncestor &&
        this.scrollableAncestor.removeEventListener("scroll", this.onScroll)
      window.removeEventListener("resize", this.onScroll)

      // cancel throttle function if possible
      this.props.throttleHandler.cancel &&
        this.props.throttleHandler.cancel.call(this)
    }

    onScroll(event) {
      super.onScroll(dom.scrollPageTop(), event)

      this.setState({
        ...this.state,
        scrollTop: dom.scrollPageTop(),
      })
    }
  }

  ScrollerBehaviour.propTypes = {
    scrollableAncestor: PropTypes.any,
    throttleHandler: PropTypes.func,
    onScroll: PropTypes.string,
  }

  ScrollerBehaviour.defaultProps = {
    throttleHandler: (handler) => handler,
    onScroll: "onScroll",
  }

  return ScrollerBehaviour
}

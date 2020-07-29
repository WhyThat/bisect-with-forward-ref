[@react.component]
let make =
  React.forwardRef((~children, ref) => {
    let (show, setShow) = React.useState(() => true);

    // Notice that instead of `useEffect`, we have `useEffect0`. See
    // reasonml.github.io/reason-react/docs/en/components#hooks for more info
    React.useEffect0(() => {
      let id =
        Js.Global.setInterval(
          () => setShow(previousShow => !previousShow),
          1000,
        );

      Some(() => Js.Global.clearInterval(id));
    });

    let style =
      if (show) {
        ReactDOMRe.Style.make(~opacity="1", ~transition="opacity 1s", ());
      } else {
        ReactDOMRe.Style.make(~opacity="0", ~transition="opacity 1s", ());
      };

    let ensuredRef =
      Js.Nullable.toOption(ref)->Belt.Option.map(ReactDOMRe.Ref.domRef);

    <div ref=?ensuredRef style> children </div>;
  });

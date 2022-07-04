import * as gtag from "../lib/gtag";

const Test = () => {
  const test = () => {
    gtag.event({
      action: "test_action",
      category: "test_category",
      label: "test_label",
    });
  };

  return (
    <div>
      <button
        onClick={test}
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        type="button"
      >
        Test
      </button>
    </div>
  );
};

export default Test;

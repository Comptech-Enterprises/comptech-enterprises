import type { FAQBlock } from "@/lib/faqs";

/** Lists, extra paragraphs and tables inside an FAQ answer. */
export function FAQAnswerBlocks({ blocks }: { blocks: FAQBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === "p") return <p key={i}>{block.text}</p>;

        if (block.type === "list") {
          const List = block.ordered ? "ol" : "ul";
          return (
            <List key={i} className={`space-y-2 pl-5 ${block.ordered ? "list-decimal" : "list-disc"}`}>
              {block.items.map((item) => (
                <li key={item.title ?? item.text}>
                  {item.title && <strong className="font-semibold text-gray-900">{item.title}: </strong>}
                  {item.text}
                </li>
              ))}
            </List>
          );
        }

        return (
          <div key={i} className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full min-w-[520px] border-collapse bg-white text-left text-sm">
              <thead>
                <tr className="bg-gray-50">
                  {block.head.map((h) => (
                    <th key={h} scope="col" className="p-3 font-semibold text-gray-900">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row[0]} className="border-t border-gray-200 align-top">
                    <th scope="row" className="p-3 font-semibold text-gray-900">{row[0]}</th>
                    {row.slice(1).map((cell, c) => (
                      <td key={c} className="p-3">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
}

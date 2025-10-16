import type { FunctionComponent } from 'react';
import type { TaxBracketDetailsProps } from '~/components/app/TaxBracketDetails/TaxBracketDetailsProps';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion';
import { TaxBracketDetailItem } from '~/components/app/TaxBracketDetailItem';

export const TaxBracketDetails: FunctionComponent<TaxBracketDetailsProps> = ({ title, brackets }) => {
  if (!brackets?.length) {
    return null;
  }

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>
          {
            brackets.map((bracket) => (
              <TaxBracketDetailItem key={bracket.bracket.rate} bracketResult={bracket} />
            ))
          }
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

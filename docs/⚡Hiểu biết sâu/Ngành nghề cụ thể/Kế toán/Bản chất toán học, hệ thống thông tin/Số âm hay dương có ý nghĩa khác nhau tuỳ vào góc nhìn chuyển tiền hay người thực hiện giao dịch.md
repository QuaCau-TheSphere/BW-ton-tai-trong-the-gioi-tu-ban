---
share: true
created: 2025-03-27T17:13
updated: 2025-10-10T13:59
---
Khái niệm:: 
Debits and credits is the only way to give your team a common, consistent "language" for dealing with money, and being able to speak this language as a dev gives you superpowers.

Accounting was invented before negative numbers. Because of this, instead of counting money as positive or negative amounts, it uses the debits and credits. Instead of subtracting funds from one account and adding them to another, we talk about crediting one account and debiting another.

But it’s the 21st century and we have negative numbers now - why not just use positive and negative numbers? Using positive and negative numbers gets ambiguous.

If your app lets Alice sends Bob $5, we remove $5 from Alice’s account and add $5 to Bob’s account. So it seems fair to say that if both user accounts started at $0, Alice’s balance is -$5, and Bob’s balance is $5. Let's represent it that way in your DB.

Your CFO would disagree. From your company’s perspective, what these balances mean is that Alice owes you $5, and the company owes Bob $5. In other words, if the company went out of business tomorrow, you'd have to go out to collect $5 from Alice so that you could give Bob the $5 he rightfully thinks he’s holding inside of your app. Wouldn’t it be more logical to show Alice’s balance as $5 and Bob’s balance as -$5?

It gets even more confusing if your software deals with financial instruments like loans, investments, or invoices. Dealing with every balance in your application as a simple positive or negative number gets really confusing, and will cause both ledgering issues and communication breakdowns between your eng and financial teams.

Nguồn:: [Accounting For Developers, Part I \| Hacker News](https://news.ycombinator.com/item?id=32495724)
[Examples of negative balances - General - Plain Text Accounting forum](https://forum.plaintextaccounting.org/t/examples-of-negative-balances/638?u=ooker)
[Âm hay dương trong giao dịch là tiền ra hay tiền vào. Âm dương trong cân đối là tiền nợ hay tiền có](../B%C3%A1o%20c%C3%A1o/%C3%82m%20hay%20d%C6%B0%C6%A1ng%20trong%20giao%20d%E1%BB%8Bch%20l%C3%A0%20ti%E1%BB%81n%20ra%20hay%20ti%E1%BB%81n%20v%C3%A0o.%20%C3%82m%20d%C6%B0%C6%A1ng%20trong%20c%C3%A2n%20%C4%91%E1%BB%91i%20l%C3%A0%20ti%E1%BB%81n%20n%E1%BB%A3%20hay%20ti%E1%BB%81n%20c%C3%B3.md)

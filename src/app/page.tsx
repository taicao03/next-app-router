'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PropTypes from 'prop-types';
function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <motion.span
        style={{
          transform: isInView ? 'none' : 'translateX(-100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </motion.span>
    </section>
  );
}
// PropTypes
Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Home() {
  return (
    <>
      <Section>
        <h2 className="mb-20 text-black">
          {` Triển lãm trưng bày 100 cổ vật tiêu biểu, như kim sách bằng bạc mạ
              vàng, bộ ấn, kiếm và một số đồ dùng trong hoàng cung thời Khải
              Định. Nổi bật là thanh kiếm "An dân bảo kiếm" của nhà vua từng sử
              dụng. Kiếm được nạm vàng và da đồi mồi, dài khoảng 90 cm, chạm
              khắc hình rồng tinh xảo. Chuôi kiếm nạm vàng, chạm khắc chữ và hoa
              văn rồng, thể hiện uy quyền của nhà vua. Kim sách dưới triều vua
              Khải Định, một loại thư tịch cổ ghi lại việc chính sự, lễ nghi
              triều Nguyễn. Sách gồm 9 tờ, 2 tờ bìa trước và sau được trang trí
              hình rồng mây, 7 tờ ruột khắc sách văn. Ấn Khải Định thần khuê
              bằng ngà voi, được khắc năm Khải Định thứ nhất 1916. Ấn Hoàng tông
              tuyên hoàng đế chi bảo được đúc năm Khải Định thứ 10, 1925. Ngai
              triều Nguyễn được sơn son thếp vàng. Chén ngọc bọc vàng được sử
              dụng dưới thời vua Khải Định.`}
        </h2>
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.L44v9JvIWjKtDqZu3gCrFQHaE8&pid=Api&P=0&h=180"
          alt=""
        />
      </Section>

      <Section>
        <h2 className="mb-20 text-black">
          {` Triển lãm trưng bày 100 cổ vật tiêu biểu, như kim sách bằng bạc mạ
              vàng, bộ ấn, kiếm và một số đồ dùng trong hoàng cung thời Khải
              Định. Nổi bật là thanh kiếm "An dân bảo kiếm" của nhà vua từng sử
              dụng. Kiếm được nạm vàng và da đồi mồi, dài khoảng 90 cm, chạm
              khắc hình rồng tinh xảo. Chuôi kiếm nạm vàng, chạm khắc chữ và hoa
              văn rồng, thể hiện uy quyền của nhà vua. Kim sách dưới triều vua
              Khải Định, một loại thư tịch cổ ghi lại việc chính sự, lễ nghi
              triều Nguyễn. Sách gồm 9 tờ, 2 tờ bìa trước và sau được trang trí
              hình rồng mây, 7 tờ ruột khắc sách văn. Ấn Khải Định thần khuê
              bằng ngà voi, được khắc năm Khải Định thứ nhất 1916. Ấn Hoàng tông
              tuyên hoàng đế chi bảo được đúc năm Khải Định thứ 10, 1925. Ngai
              triều Nguyễn được sơn son thếp vàng. Chén ngọc bọc vàng được sử
              dụng dưới thời vua Khải Định.`}
        </h2>
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.L44v9JvIWjKtDqZu3gCrFQHaE8&pid=Api&P=0&h=180"
          alt=""
        />
      </Section>

      <Section>
        <h2 className="mb-20 text-black">
          {` Triển lãm trưng bày 100 cổ vật tiêu biểu, như kim sách bằng bạc mạ
              vàng, bộ ấn, kiếm và một số đồ dùng trong hoàng cung thời Khải
              Định. Nổi bật là thanh kiếm "An dân bảo kiếm" của nhà vua từng sử
              dụng. Kiếm được nạm vàng và da đồi mồi, dài khoảng 90 cm, chạm
              khắc hình rồng tinh xảo. Chuôi kiếm nạm vàng, chạm khắc chữ và hoa
              văn rồng, thể hiện uy quyền của nhà vua. Kim sách dưới triều vua
              Khải Định, một loại thư tịch cổ ghi lại việc chính sự, lễ nghi
              triều Nguyễn. Sách gồm 9 tờ, 2 tờ bìa trước và sau được trang trí
              hình rồng mây, 7 tờ ruột khắc sách văn. Ấn Khải Định thần khuê
              bằng ngà voi, được khắc năm Khải Định thứ nhất 1916. Ấn Hoàng tông
              tuyên hoàng đế chi bảo được đúc năm Khải Định thứ 10, 1925. Ngai
              triều Nguyễn được sơn son thếp vàng. Chén ngọc bọc vàng được sử
              dụng dưới thời vua Khải Định.`}
        </h2>
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.L44v9JvIWjKtDqZu3gCrFQHaE8&pid=Api&P=0&h=180"
          alt=""
        />
      </Section>
    </>
  );
}

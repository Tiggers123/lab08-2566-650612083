export const Footer = (prons) => {
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        copyright © {prons.year} {prons.fullname} {prons.studentId}
      </p>
    </div>
  );
};
